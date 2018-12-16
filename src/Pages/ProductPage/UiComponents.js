import styled from 'styled-components';
import { HoveredYellowButton } from 'BasicComponents/Buttons/UiComponents';

export const ProductWrapper = styled.div` 
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: minmax(auto, 65%) 1fr;
    padding-top: 5rem;
`;
export const Slide = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    background: url(${({ img }) => img}) no-repeat center;
    background-size: contain;
`;
export const ProductText = styled.p`
    margin: 3rem 0;
    line-height: 2.1;
    color: ${({ theme }) => theme.productsDescriptionColor};
`;

export const SubmitButton = styled(HoveredYellowButton).attrs({ type: 'submit' })`
    margin-top: 3rem;
`;
