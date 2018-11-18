import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RangeInput from 'BasicComponents/InputFields/RangeInput';
import TwoStateImg from 'BasicComponents/TwoStateImg';

import {
    CategoryAndFiltersWrapper, ShopContentWrapper, ItemsHeader, CategoryItems, ItemsContainer, PaginationButton,
    FilteringCheckBox, ColorFilterButton, ColorFiltersWrapper, ContentWrapper, ProductsContainer, PaginationContainer,
    Product, ProductPrice, ProductEntitiesContainer, ProductName, ProductActions, AddToCheckOut, CartIcon,
} from './UiComponents';


import { colorFilters } from '../../filters';

class ShopPage extends Component {
    render() {
        return (
            <ShopContentWrapper>
                <CategoryAndFiltersWrapper>
                    <ItemsContainer>
                        <ItemsHeader>Categories</ItemsHeader>
                        <ul>
                            <li><CategoryItems to="/shop">Chairs</CategoryItems></li>
                            <li><CategoryItems to="/shop">Beds</CategoryItems></li>
                            <li><CategoryItems to="/shop">Accessories</CategoryItems></li>
                            <li><CategoryItems to="/shop">Furniture</CategoryItems></li>
                            <li><CategoryItems to="/shop">Home Deco</CategoryItems></li>
                            <li><CategoryItems to="/shop">Dressings</CategoryItems></li>
                            <li><CategoryItems to="/shop">Tables</CategoryItems></li>
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
                        <Product>
                            <TwoStateImg />

                            <ProductEntitiesContainer>
                                <div>
                                    <ProductPrice>$180</ProductPrice>
                                    <ProductName>Modern Chair</ProductName>
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
                        <Product>
                            <TwoStateImg />

                            <ProductEntitiesContainer>
                                <div>
                                    <ProductPrice>$180</ProductPrice>
                                    <ProductName>Modern Chair</ProductName>
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

export default ShopPage;
