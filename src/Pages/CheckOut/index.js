import React from 'react';
import { compose, graphql } from 'react-apollo';
import memoizeOne from 'memoize-one';
import PropTypes from 'prop-types';

import Table from 'BasicComponents/Table';
import tableColumnsList from './tableColumnsList';
import {
    CheckoutConfirmButton,
    CheckOutInformationContainer,
    CheckOutInformationHeader,
    CheckOutInformationItem,
    CheckOutInformationList,
    CheckOutInformationWrapper,
    ContentContainer,
    ContentWrapper,
    RemoveIcon,
} from './UiComponents';

import { GET_CART_STATE, GET_PRODUCTS, REMOVE_CART_ITEM } from '../../graphQl/schema';

const handleCheckout = () => {
    // eslint-disable-next-line no-undef
    alert('sorry, but this is web demonstration site. if you want you own web site,'
        + ' or you are has question. post me baccanimonium@gmail.com');
};

const renderSlidesList = memoizeOne((products, cart) => cart.reduce((acc, product) => {
    const productData = products.find(({ id }) => id === product.id);
    acc.price += productData.price;
    acc.freeDelivery = acc.price > 1000;
    // eslint-disable-next-line no-param-reassign
    acc.tableData.push({ SelectedQuantity: product.quantity, ...productData });
    return acc;
}, { tableData: [], price: 0, freeDelivery: false }));

const deliveryPrice = 120;

function CheckOutPage({ cartState: { cart }, getProducts: { getProducts } = {}, removeCartItem }) {
    const { tableData = [], price = 0, freeDelivery = false } = getProducts ? renderSlidesList(getProducts, cart) : {};
    const removeOption = {
        key: 'id',
        format: (item) => <RemoveIcon onClick={() => removeCartItem({ variables: { id: item } })} />,
    };
    return (
        <ContentWrapper>
            <h2>Shopping Cart</h2>
            <ContentContainer>
                <div>
                    <Table data={tableData} tableColumnsList={[...tableColumnsList, removeOption]} />
                </div>
                <CheckOutInformationWrapper>
                    <CheckOutInformationContainer>
                        <CheckOutInformationHeader>Cart Total</CheckOutInformationHeader>
                        <CheckOutInformationList>
                            <CheckOutInformationItem>
                                <span>subtotal:</span>
                                <span>${price}</span>
                            </CheckOutInformationItem>
                            <CheckOutInformationItem>
                                <span>delivery:</span>
                                <span>{freeDelivery ? 'Free' : `$${deliveryPrice}`}</span>
                            </CheckOutInformationItem>
                            <CheckOutInformationItem>
                                <span>total:</span>
                                {freeDelivery && <span>${freeDelivery ? price : price + deliveryPrice}</span>}
                            </CheckOutInformationItem>
                        </CheckOutInformationList>
                        <CheckoutConfirmButton onClick={handleCheckout}>Checkout</CheckoutConfirmButton>
                    </CheckOutInformationContainer>
                </CheckOutInformationWrapper>
            </ContentContainer>
        </ContentWrapper>
    );
}

CheckOutPage.propTypes = {
    cartState: PropTypes.shape().isRequired,
    getProducts: PropTypes.shape().isRequired,
    removeCartItem: PropTypes.func.isRequired,
};

export default compose(
    graphql(GET_CART_STATE, { name: 'cartState' }),
    graphql(REMOVE_CART_ITEM, { name: 'removeCartItem' }),
    graphql(GET_PRODUCTS,
        {
            name: 'getProducts',
            skip: ({ cartState: { cart } }) => cart.length === 0,
            options: ({ cartState: { cart } }) => ({
                variables: {
                    id: cart.map(({ id }) => id),
                },
            }),
        }),
)(CheckOutPage);
