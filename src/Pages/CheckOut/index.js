import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'BasicComponents/Table';
import tableColumnsList from './tableColumnsList';
import { ContentWrapper, ContentContainer, CheckOutInformationContainer, CheckOutInformationHeader,
    CheckOutInformationList, CheckOutInformationItem, CheckoutConfirmButton, CheckOutInformationWrapper } from './UiComponents';

const data = [
    {
        img: '/img/bg-img/cart1.jpg',
        name: 'White Modern Chair',
        price: '130',
        quantity: '1',
    },
    {
        img: '/img/bg-img/cart2.jpg',
        name: 'Minimal Plant Pot',
        price: '10',
        quantity: '1',
    },
    {
        img: '/img/bg-img/cart3.jpg',
        name: 'Minimal Plant Pot',
        price: '10',
        quantity: '1',
    },
];

class CheckOutPage extends Component {
    render() {
        return (
            <ContentWrapper>
                <h2>Shopping Cart</h2>
                <ContentContainer>
                    <Table data={data} tableColumnsList={tableColumnsList} />
                    <CheckOutInformationWrapper>
                        <CheckOutInformationContainer>
                            <CheckOutInformationHeader>Cart Total</CheckOutInformationHeader>
                            <CheckOutInformationList>
                                <CheckOutInformationItem>
                                    <span>subtotal:</span>
                                    <span>$140.00</span>
                                </CheckOutInformationItem>
                                <CheckOutInformationItem>
                                    <span>delivery:</span>
                                    <span>Free</span>
                                </CheckOutInformationItem>
                                <CheckOutInformationItem>
                                    <span>total:</span>
                                    <span>$140.00</span>
                                </CheckOutInformationItem>
                            </CheckOutInformationList>
                            <CheckoutConfirmButton>Checkout</CheckoutConfirmButton>
                        </CheckOutInformationContainer>
                    </CheckOutInformationWrapper>
                </ContentContainer>
            </ContentWrapper>
        );
    }
}

CheckOutPage.propTypes = {};

export default CheckOutPage;
