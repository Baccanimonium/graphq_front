import styled from 'styled-components';
import { Form } from 'formik';

export const PromotionSectionWrapper = styled.section`
    background-color: ${({ theme }) => theme.secondBackgroundColor};
    position: relative;
    padding-top: 6.25rem;
`;

export const ContentWrapper = styled.div`
    padding: 0 0.9375rem;
    margin: 0 7rem;
`;

export const TextWrapper = styled.div`
    margin-bottom: 6.25rem;
`;

export const PromotionHeader = styled.h2`
    margin-bottom: 0.625rem;
    color: ${({ theme }) => theme.defaultColor}
`;

export const PromotionHeaderAccent = styled.span`
    color: ${({ theme }) => theme.mainElementsColor}
`;

export const PromotionText = styled.p`
    color: ${({ theme }) => theme.textColor}
`;

export const StyledForm = styled(Form)`
    display: flex;
    padding-bottom: 6.25rem;
`;
