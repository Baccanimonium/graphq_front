import styled, { css } from 'styled-components';
import { Field } from 'formik';

export const InputFieldStyles = css`
    width: 100%;
    height: 3.4375rem;
    background-color: ${({ theme }) => theme.defaultColor};
    color: ${({ theme }) => theme.inputTextColor};
    font-size: 14px;
    font-style: italic;
    border: none;
`;

export const InputField = styled(Field)`
    ${InputFieldStyles}
`;
