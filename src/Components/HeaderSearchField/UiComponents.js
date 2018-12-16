import styled from 'styled-components';
import CloseButton from 'BasicComponents/CloseButton';

export const SearchHeaderWrapper = styled.div`
    padding: 0 6em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${({ height }) => height};
    background-color: ${({ theme }) => theme.elementsBackground};
`;

export const StyledCloseButton = styled(CloseButton)`
    position: absolute;
    top: 0;
    right: 0;
`;
export const AccentSpan = styled.span`
    font-weight: 700;
`;
