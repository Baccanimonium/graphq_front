import styled from 'styled-components';
import { ItemPrice } from 'BasicComponents/CommonUiComponents';

export const MasonryWrapper = styled.div`
    width: 100%;
`;

export const ItemTitle = styled.h4`
    transition: 250ms color ease-in-out;
`;

export const Price = styled(ItemPrice)`
    
`;

export const ItemData = styled.div`
    position: absolute;
    padding: 40px 0 0 40px;
    top: 0;
    left: 0;
    z-index: 2;
    transition: 250ms background-color ease-in-out;
    :hover {
        ${Price}, ${ItemTitle} {
            color: #fff;
        }
        background-color: rgba(60, 60, 60, 0.7);
    }
`;
