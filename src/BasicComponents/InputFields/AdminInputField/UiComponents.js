import styled, { css } from 'styled-components';

export const adminInputStyles = css`
    display: block;
    height: 2.375rem;
    font-size: .8125rem;
    line-height: 1.5385;
    color: #333;
    background-color: #fff;
    border-radius: ${({ theme }) => theme.borders.radius};
    box-shadow: 0 0 0 0 transparent;
    border: 1px solid ${({ theme }) => theme.borders.defaultColor};
    padding: 0.4375rem 0.625rem;
`;

export const AdminInputField = styled.input`
    ${adminInputStyles};
`;
