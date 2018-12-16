import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import memoizeOne from 'memoize-one';
import { Link } from 'react-router-dom';

import RangeInput from 'BasicComponents/InputFields/RangeInput';
import TwoStateImg from 'BasicComponents/TwoStateImg';
import withPagination from '../../utils/withPagination';
import withFilters from '../../utils/withFilters';
import debounce from '../../utils/debounce';

import {
    CategoryAndFiltersWrapper, ShopContentWrapper, ItemsHeader, CategoryItems, ItemsContainer, PaginationButton,
    FilteringCheckBox, ColorFilterButton, ColorFiltersWrapper, ContentWrapper, ProductsContainer, PaginationContainer,
    Product, ProductPrice, ProductEntitiesContainer, ProductName, ProductActions, AddToCheckOut, CartIcon,
    PrevButtonIcon, NextButtonIcon,
} from './UiComponents';

import { PRODUCT_PAGE } from '../../config';
import { colorFilters, brandFilters } from '../../filters';
import { GET_ALL_CATEGORIES, GET_PRODUCTS } from '../../graphQl/schema';

class ShopPage extends Component {
    static propTypes = {
        match: PropTypes.shape().isRequired,
        getAllCategories: PropTypes.shape().isRequired,
        getProducts: PropTypes.shape().isRequired,
        history: PropTypes.shape().isRequired,
        setPage: PropTypes.func.isRequired,
        limit: PropTypes.number.isRequired,
        page: PropTypes.number.isRequired,
    };

    renderCategoryList = memoizeOne((list) => (
        list.map(({ name, id }) => (
            <li key={id}><CategoryItems to={`/shop/${name}`}>{name}</CategoryItems></li>
        ))
    ));

    renderCategoryItems = memoizeOne((products = []) => (
        products.map(({ name, price, image, id }) => (
            <Product key={id}>
                <Link to={`${PRODUCT_PAGE}/${id}`}>
                    <TwoStateImg images={image} />

                    <ProductEntitiesContainer>
                        <div>
                            <ProductPrice>{name}</ProductPrice>
                            <ProductName>${price}</ProductName>
                        </div>
                        <ProductActions>
                            <AddToCheckOut>
                                <CartIcon />
                            </AddToCheckOut>
                        </ProductActions>
                    </ProductEntitiesContainer>
                </Link>
            </Product>
        ))
    ));

    renderPagination = memoizeOne((page, length) => {
        const { setPage, limit } = this.props;
        return (
            <PaginationContainer>
                {page - 1 > 0 && (
                    <PaginationButton onClick={setPage} value={page - 1}>
                        <PrevButtonIcon />
                    </PaginationButton>
                )}
                <PaginationButton className="active" onClick={setPage} value={page}>
                    {page}
                </PaginationButton>
                {length === limit && (
                    <PaginationButton onClick={setPage} value={parseInt(page, 10) + 1}>
                        <NextButtonIcon />
                    </PaginationButton>
                )}
            </PaginationContainer>
        );
    });

    renderColorFilters = memoizeOne((selectedColors = []) => {
        const { setFilters } = this.props;
        return colorFilters.map(({ value, color }) => (
            <ColorFilterButton
                key={color}
                className={selectedColors.includes(value) ? 'active' : ''}
                color={color}
                onClick={() => setFilters('colors', value)}
            />
        ));
    });

    renderBrandFilters = memoizeOne(() => {
        const { setFilters } = this.props;
        return brandFilters.map((brand) => (
            <FilteringCheckBox
                key={brand}
                id={brand}
                label={brand}
                onClick={() => setFilters('brand', brand)}
            />
        ));
    });

    componentDidMount() {
        this.redirectToFirstCategory();
    }

    componentDidUpdate() {
        this.redirectToFirstCategory();
    }

    redirectToFirstCategory = () => {
        const {
            match: { params: { category }, url },
            getAllCategories: { getCategories: [{ name } = {}] = [] },
            history: { push },
        } = this.props;
        if (!category && name) push(`${url}/${name}`);
    };

    handleChangePriceRange = ({ min, max }) => {
        const { setFilters } = this.props;
        setFilters('price', [min, max]);
    };

    render() {
        const {
            getAllCategories: { getCategories = [] },
            getProducts: { getProducts = [] } = {}, page,
            filters: { colors, price = [0, 10000] },
        } = this.props;
        const [min, max] = price;
        const categoriesList = this.renderCategoryList(getCategories);
        const products = this.renderCategoryItems(getProducts);
        const pagination = this.renderPagination(page, getProducts.length);
        const colorsFilters = this.renderColorFilters(colors);
        const brandsFilters = this.renderBrandFilters();
        // console.log(brands);
        return (
            <ShopContentWrapper>
                <CategoryAndFiltersWrapper>
                    <ItemsContainer>
                        <ItemsHeader>Categories</ItemsHeader>
                        <ul>
                            {categoriesList}
                        </ul>
                    </ItemsContainer>

                    <ItemsContainer>
                        <ItemsHeader>Brands</ItemsHeader>
                        {brandsFilters}
                    </ItemsContainer>

                    <ItemsContainer>
                        <ItemsHeader>Color</ItemsHeader>
                        <ColorFiltersWrapper>
                            {colorsFilters}
                        </ColorFiltersWrapper>
                    </ItemsContainer>

                    <ItemsContainer>
                        <ItemsHeader>Price</ItemsHeader>
                        <RangeInput
                            draggableTrack
                            maxValue={10000}
                            minValue={1}
                            value={{ min, max }}
                            onChange={this.handleChangePriceRange}
                        />
                        <div>${min} - ${max}</div>
                    </ItemsContainer>
                </CategoryAndFiltersWrapper>

                <ContentWrapper>
                    <ProductsContainer>
                        {products}
                    </ProductsContainer>
                    {pagination}
                </ContentWrapper>
            </ShopContentWrapper>
        );
    }
}

export default compose(
    withPagination,
    withFilters,
    graphql(GET_ALL_CATEGORIES, { name: 'getAllCategories' }),
    graphql(GET_PRODUCTS,
        {
            name: 'getProducts',
            skip: ({ match: { params: { category } } }) => category === undefined,
            options: ({ match: { params: { category } }, limit, skip, filters }) => ({
                variables: {
                    categoryId: category,
                    limit,
                    skip,
                    ...filters,
                },
            }),
        }),
)(ShopPage);
