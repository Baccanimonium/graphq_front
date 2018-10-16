import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Formik } from 'formik';
import Slider from 'Components/Slider';
import { ItemPrice } from 'BasicComponents/CommonUiComponents';
import NumberInput from 'BasicComponents/InputFields/NumberInput';
import img1 from '../../../amado/img/product-img/pro-big-1.jpg';
import img2 from '../../../amado/img/product-img/pro-big-2.jpg';
import img3 from '../../../amado/img/product-img/pro-big-3.jpg';
import img4 from '../../../amado/img/product-img/pro-big-4.jpg';
import { ProductWrapper, Slide, ProductText, SubmitButton, ShortcutContaner } from './UiComponents';


const ProductPage = ({ theme }) => {
    return (
        <ProductWrapper>
            <Slider>
                <Slide img={img1} />
                <Slide img={img2} />
                <Slide img={img3} />
                <Slide img={img4} />
            </Slider>
            <div>
                <ItemPrice>$180</ItemPrice>
                <h4>White modern chair</h4>
                <ProductText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem
                    mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?
                </ProductText>
                <Formik
                    onSubmit={(values, actions) =>  console.log(values)}
                    render={({ errors, touched, isSubmitting }) => (
                        <form>
                            <NumberInput label="Qty" maxLength="4" value="1" />
                            <SubmitButton
                                size={theme.buttonsSize.large}
                                disabled={isSubmitting}
                            >
                                Add to cart
                            </SubmitButton>
                        </form>
                    )}
                />
            </div>
        </ProductWrapper>
    );
};

ProductPage.propTypes = {

};

export default withTheme(ProductPage);
