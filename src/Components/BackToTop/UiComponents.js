import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';

export const BackToTopButton = styled.button`
    position: fixed;
    background-color: ${({ theme }) => theme.mainElementsColor};
    border: 0;
    bottom: 0;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
    color: ${({ theme }) => theme.defaultColor};
    right: 60px;
    text-align: center;
    width: 2.5rem;
    height: 2.5rem;
`;

export const BackToTopIcon = styled(Icon).attrs({
    icon: chevronUp,
})``;
