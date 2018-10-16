import styled, { css } from 'styled-components';

export const YellowHoverItem = css`
    color: ${({ theme }) => theme.secondElementsColor};
    :hover {
        color: ${({ theme }) => theme.mainElementsColor};
    }
`;

export const ItemPrice = styled.div`
    transition: 250ms color ease-in-out;
    color: ${({ theme }) => theme.productsDescriptionColor};
    margin: 1rem 0 0.3125rem;
    line-height: 1;
    position: relative;
    
    ::before {
        content: '';
        width: 5rem;
        border-top: 3px solid ${({ theme }) => theme.mainElementsColor};
        position: absolute;
        top: -15px;
    }
`;
