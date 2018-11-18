import styled from 'styled-components';
import { Icon } from 'react-icons-kit'
import { opencart } from 'react-icons-kit/fa/opencart';

import Link from 'BasicComponents/Link';
import DefaultCheckBox from 'BasicComponents/InputFields/DefaultCheckBox';

export const ShopContentWrapper = styled.div`
    display: flex;
`;

export const CategoryAndFiltersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6.25rem 2.25rem;
    width: 14.375rem;
    background-color: ${({ theme }) => theme.accentBackgroundColor};
`;

export const ItemsContainer = styled.div`
    margin-bottom: 3.125rem;
`;

export const ItemsHeader = styled.h2`
    font-size: 1.5rem;
    margin: 0 0 1.875rem;
`;

export const CategoryItems = styled(Link)`
    padding: 1rem 0 1rem 1.25rem;
    color: ${({ theme }) => theme.links.grayColor};
`;

export const FilteringCheckBox = styled(DefaultCheckBox)`
    color: ${({ theme }) => theme.links.grayColor};
    :hover {
        color: ${({ theme }) => theme.mainElementsColor};
    }
`;
export const ColorFiltersWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: .25rem;
    grid-row-gap: .75rem;
`;

export const ColorFilterButton = styled.button.attrs({
    type: 'button',
})`
    cursor: pointer;
    border: 1px transparent;
    background-color: ${({ color }) => color};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
`;

export const ContentWrapper = styled.div`
    margin: 6.25rem 1.25rem;
    width: 100%;
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
`;

export const Product = styled.div`
    width: 100%;
`;

export const ProductPrice = styled.div`
    color: ${({ theme }) => theme.mainElementsColor};
    position: relative;
    margin-top: 2rem;
    ::before {
        content: '';
        width: 2.5rem;
        border-top: 3px solid #fbb710;
        position: absolute;
        top: -15px;
    }
`;

export const ProductEntitiesContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProductName = styled.h6`
    margin: 0;
`;

export const ProductActions = styled.div`
    margin-top: auto;
`;

export const AddToCheckOut = styled.button`
    border: 0;
    background-color: transparent;
    cursor: pointer;
`;

export const CartIcon = styled(Icon).attrs({
    icon: opencart,
    size: '18',
})`
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 3rem;
`;

export const PaginationButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    color: #000;
    background-color: transparent;
    border: 0;
    transition-property: color, background-color;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;
    &:hover, &.active {
        background-color: ${({ theme }) => theme.mainElementsColor};
        color: ${({ theme }) => theme.defaultColor};
    }
`;
