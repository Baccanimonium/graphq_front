import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { cross } from 'react-icons-kit/icomoon/cross';

export const CloseButtonContainer = styled.button`
    transition-duration: 500ms;
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    color: ${({ theme }) => theme.defaultColor};
    cursor: pointer;
    background-color: ${({ theme }) => theme.mainElementsColor};
    border: 0;
    :hover {
        background-color: ${({ theme }) => theme.secondElementsColor};
    }
`;

export const CloseButtonIcon = styled(Icon).attrs({
    icon: cross,
    size: 12,
})``;
