import styled from 'styled-components';

const Button = styled.button`
    ${({ theme, size }) => (size || theme.buttonsSize.default)};
    color: ${({ theme }) => theme.defaultColor}
    cursor: pointer;
    border: none;
    padding: 0 7px;
    font-size: 18px;
    line-height: 56px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    transition-timing-function: ease-in-out;
    transition-duration: 150ms;
    transition-property: color, background-color, border-color, box-shadow;
`;

export const YellowButton = styled(Button)`
    background-color: ${({ theme }) => theme.mainElementsColor};
`;
export const BlackButton = styled(Button)`
    background-color: ${({ theme }) => theme.secondElementsColor};
`;
export const HoveredYellowButton = styled(Button)`
    background-color: ${({ theme }) => theme.mainElementsColor};
    :hover {
        background-color: ${({ theme }) => theme.secondElementsColor};
    }
`;
