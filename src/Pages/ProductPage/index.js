import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { graphql, compose } from 'react-apollo';
import { Formik, Field, Form } from 'formik';
import memoizeOne from 'memoize-one';

import Slider from 'Components/Slider';
import { ItemPrice } from 'BasicComponents/CommonUiComponents';
import NumberInput from 'BasicComponents/InputFields/NumberInput';
import { ProductWrapper, Slide, ProductText, SubmitButton } from './UiComponents';

import { GET_PRODUCT, ADD_CART_ITEM } from '../../graphQl/schema';

const renderSlidesList = memoizeOne((images = []) => (
    images.map((image) => (
        <Slide key={image} img={image} />
    ))
));

const ProductPage = ({ theme, match: { params: { id } },
    product: { getProduct: { name, price, image, description } = {} }, addCartItem }) => {
    const renderedImages = renderSlidesList(image);
    return (
        <ProductWrapper>
            <Slider>
                {renderedImages}
            </Slider>
            <div>
                <ItemPrice>${price}</ItemPrice>
                <h4>{name}</h4>
                <ProductText>
                    {description}
                </ProductText>
                <Formik
                    onSubmit={(values) => addCartItem({ variables: { id, ...values } })}
                    render={({ errors, touched, isSubmitting }) => (
                        <Form>
                            <Field
                                label="Qty"
                                name="quantity"
                                component={NumberInput}
                            />
                            <SubmitButton
                                size={theme.buttonsSize.large}
                                disabled={isSubmitting}
                            >
                                Add to cart
                            </SubmitButton>
                        </Form>
                    )}
                />
            </div>
        </ProductWrapper>
    );
};

ProductPage.propTypes = {
    theme: PropTypes.shape().isRequired,
    product: PropTypes.shape().isRequired,
};

export default compose(
    withTheme,
    graphql(GET_PRODUCT, {
        name: 'product',
        options: ({ match: { params: { id } } }) => ({
            variables: {
                id,
            },
        }),
    }),
    graphql(ADD_CART_ITEM, { name: 'addCartItem' })
)(ProductPage);
