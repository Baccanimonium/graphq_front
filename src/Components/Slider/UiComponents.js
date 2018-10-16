import styled from 'styled-components';

export const SliderWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

export const GridSliderWrapper = styled(SliderWrapper)`
    display: grid;
    grid-row-gap: 1rem;
    grid-template-rows: 90% 1fr;
`;


export const ShortcutWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: .5rem;
`;

export const ShortcutContaner = styled.div`
    border: ${({ current, theme }) => current ? `1px solid ${theme.mainElementsColor}` : 'none'};
`;
