import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    margin-bottom: 0;
    border-collapse: collapse;
`;

export const Thead = styled.thead`
    width: 2.5rem;
    background-color: ${({ theme }) => theme.elementsBackground};
`;

export const Th = styled.th`
    font-size: .75rem;
    color: ${({ theme }) => theme.headersColor};
    padding: .75rem 0;
    width: ${({ columnWth }) => columnWth}%;
`;

export const Td = styled.td`
    padding: .75rem 0;
`;
