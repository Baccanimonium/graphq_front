export default {
    option: (base, state) => ({
        ...base,
        borderBottom: '1px dotted pink',
        color: state.isFullscreen ? 'red' : 'blue',
        padding: 20,
    }),
    control: (base) => ({
        ...base,
        position: 'relative',
        height: '60px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.075)',
        color: '#6b6b6b',
        borderRadius: '0',
    }),
    dropdownIndicator: () => ({
        display: 'none',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    valueContainer: (base) => ({
        ...base,
        marginLeft: '2.5rem',
        position: 'static',
    }),
    singleValue: (base, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {
            ...base,
            opacity,
            transition,
        };
    },
};
