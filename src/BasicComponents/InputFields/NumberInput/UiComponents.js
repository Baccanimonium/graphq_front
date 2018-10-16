import styled, { css } from 'styled-components';
import { InputFieldStyles } from 'BasicComponents/InputFields/InputFields';
import { Icon } from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';

export const InputContainer = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.elementsBackground};
    display: flex;
    max-width: 9rem;
    align-items: center;
    padding: 0 0.5rem;
`;

export const NumberInputField = styled.input`
    ${InputFieldStyles};   
    height: 2.5rem;
    max-width: 6rem;
    background-color: inherit;
    margin-left: 0.5rem;
    text-align: center;
`;

export const Label = styled.span`
    font-weight: 600;
    color: ${({ theme }) => theme.productsDescriptionColor};
`;
const iconStyles = css`
    cursor: pointer;
    position: absolute;
    right: 3px;
`;
export const IncrementIcon = styled(Icon).attrs({
    icon: chevronUp,
    size: 10,
})`
    ${iconStyles};
    padding: 6px 10px 4px;
    top: 0;
`;
export const DecrementIcon = styled(Icon).attrs({
    icon: chevronDown,
    size: 10,
})`
    ${iconStyles};
    padding: 4px 10px 6px;
    bottom: 0;
`;
