import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { PromotionSectionWrapper, ContentWrapper, TextWrapper, PromotionHeader,
    PromotionHeaderAccent, PromotionText, StyledForm } from './UiComponents';
import { InputField } from 'BasicComponents/InputFields/InputFields';
import { YellowButton } from 'BasicComponents/Buttons/UiComponents';


const Promotions = props => {
    return (
        <PromotionSectionWrapper>
            <ContentWrapper>
                <TextWrapper>
                    <PromotionHeader>
                        {'Subscribe for a '}
                        <PromotionHeaderAccent>25% Discount</PromotionHeaderAccent>
                    </PromotionHeader>
                    <PromotionText>
                        Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi
                        vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum
                        nec.
                    </PromotionText>
                </TextWrapper>
                <Formik
                    onSubmit={(values, actions) => console.log(values)}
                    render={({ errors, touched, isSubmitting }) => (
                        <StyledForm>
                            <InputField type="email" name="email" />
                            <YellowButton type="submit" disabled={isSubmitting}>
                                Subscribe
                            </YellowButton>
                        </StyledForm>

                    )}
                />
            </ContentWrapper>
        </PromotionSectionWrapper>
    );
};

Promotions.propTypes = {

};

export default Promotions;
