import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyle = css`
    position: relative;
    z-index: 1;
    display: block;
    line-height: 0.9;
    color: ${({ theme }) => theme.secondElementsColor};
    font-weight: 500;
    transition: all 500ms ease 0s;
    text-decoration: none;
    outline: 0 solid transparent;
    :hover {
        color: ${({ theme }) => theme.mainElementsColor};
    }
`;

export const CustomLink = styled(Link)`
    ${LinkStyle}
`;
export const CustomA = styled.a`
    ${LinkStyle}
`;
