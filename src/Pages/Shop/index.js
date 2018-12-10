import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import memoizeOne from 'memoize-one';

import PropTypes from 'prop-types';
import RangeInput from 'BasicComponents/InputFields/RangeInput';
import TwoStateImg from 'BasicComponents/TwoStateImg';

import {
    CategoryAndFiltersWrapper, ShopContentWrapper, ItemsHeader, CategoryItems, ItemsContainer, PaginationButton,
    FilteringCheckBox, ColorFilterButton, ColorFiltersWrapper, ContentWrapper, ProductsContainer, PaginationContainer,
    Product, ProductPrice, ProductEntitiesContainer, ProductName, ProductActions, AddToCheckOut, CartIcon,
} from './UiComponents';


import { colorFilters } from '../../filters';
import { GET_ALL_CATEGORIES, GET_PRODUCTS_BY_CATEGORY_ID } from '../../graphQl/schema';

class ShopPage extends Component {
    static defaultProps = {
        getProducts: {
            getProducts: [],
        },
    };

    renderCategoryList = memoizeOne((list) => (
        list.map(({ name, id }) => (
            <li key={id}><CategoryItems to={`/shop/${name}`}>{name}</CategoryItems></li>
        ))
    ));

    renderCategoryItems = memoizeOne((products = []) => (
        products.map(({ name, price, image, id }) => (
            <Product key={id}>
                <TwoStateImg images={image} />

                <ProductEntitiesContainer>
                    <div>
                        <ProductPrice>{name}</ProductPrice>
                        <ProductName>${price}</ProductName>
                    </div>
                    <ProductActions>
                        <div className="ratings">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <AddToCheckOut>
                            <CartIcon />
                        </AddToCheckOut>
                    </ProductActions>
                </ProductEntitiesContainer>
            </Product>
        ))
    ))

    componentDidUpdate({ match: { params: { category: PrevCategory } } }, nextState) {
        const { match: { params: { category } } } = this.props;
        if (category !== PrevCategory && category) {
            console.log(category)
        }
    }

    render() {
        const { getAllCategories: { loading, getCategories = [] },getProducts: { getProducts} } = this.props;
        const categoriesList = this.renderCategoryList(getCategories);
        const products = this.renderCategoryItems(getProducts)
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
                        <FilteringCheckBox id="amado" label="Amado" />
                        <FilteringCheckBox id="Ikea" label="Ikea" />
                        <FilteringCheckBox id="Furniture Inc" label="Furniture Inc" />
                        <FilteringCheckBox id="The factory" label="The factory" />
                        <FilteringCheckBox id="Artdeco" label="Artdeco" />
                    </ItemsContainer>

                    <ItemsContainer>
                        <ItemsHeader>Color</ItemsHeader>
                        <ColorFiltersWrapper>
                            <ColorFilterButton color={colorFilters[0].color} />
                            <ColorFilterButton color={colorFilters[1].color} />
                            <ColorFilterButton color={colorFilters[2].color} />
                            <ColorFilterButton color={colorFilters[3].color} />
                            <ColorFilterButton color={colorFilters[4].color} />
                            <ColorFilterButton color={colorFilters[5].color} />
                            <ColorFilterButton color={colorFilters[6].color} />
                            <ColorFilterButton color={colorFilters[7].color} />
                        </ColorFiltersWrapper>
                    </ItemsContainer>

                    <ItemsContainer>
                        <ItemsHeader>Price</ItemsHeader>
                        <RangeInput
                            draggableTrack
                            maxValue={1000}
                            minValue={1}
                            value={{ min: 151, max: 1000 }}
                            onChange={() => (null)}
                        />
                        <div>$10 - $1000</div>
                    </ItemsContainer>
                </CategoryAndFiltersWrapper>

                <ContentWrapper>
                    <ProductsContainer>
                        {products}
                    </ProductsContainer>


                    <PaginationContainer>
                        <PaginationButton className="active">01.</PaginationButton>
                        <PaginationButton>02.</PaginationButton>
                        <PaginationButton>03.</PaginationButton>
                        <PaginationButton>04.</PaginationButton>
                    </PaginationContainer>
                </ContentWrapper>
            </ShopContentWrapper>
        );
    }
}

ShopPage.propTypes = {};

export default compose(
    graphql(GET_ALL_CATEGORIES, { name: 'getAllCategories' }),
    graphql(GET_PRODUCTS_BY_CATEGORY_ID,
        {
            name: 'getProducts',
            skip: ({ match: { params: { category } } }) => category === undefined,
            options: ({ match: { params: { category } } }) => ({
                variables: {
                    categoryId: category,
                },
            }),
        }),
)(ShopPage);
