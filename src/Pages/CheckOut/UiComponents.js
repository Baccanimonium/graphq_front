import styled from 'styled-components';
import { HoveredYellowButton } from 'BasicComponents/Buttons/UiComponents';

export const ContentWrapper = styled.div`
    padding: 6.25rem 0;
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 75% 1fr;
    grid-column-gap: 1rem;
    margin-right: 2rem;
`;
export const CheckOutInformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CheckOutInformationContainer = styled.div`
    background-color: ${({ theme }) => theme.elementsBackground};
    padding: 1.875rem 1.25rem;
`;

export const CheckOutInformationHeader = styled.h5`
    margin: 0;
`;

export const CheckOutInformationList = styled.ul`
    color: ${({ theme }) => theme.productsDescriptionColor};
    font-size: 0.875rem;
    margin-bottom: 6.25rem;
`;

export const CheckOutInformationItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
`;

export const CheckoutConfirmButton = styled(HoveredYellowButton)`
    width: 100%;
`;
