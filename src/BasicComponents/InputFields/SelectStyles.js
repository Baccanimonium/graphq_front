import transparentize from 'polished/lib/color/transparentize';

export default (theme) => ({
    container: (base) => ({
        ...base,
        minWidth: '8rem',
    }),
    control: (base, state) => ({
        ...base,
        borderColor: !state.selectProps.haserror ? theme.borders.defaultColor : theme.errorColor,
        backgroundColor: `${theme.defaultColor}`,
        borderRadius: `${theme.borders.radius}`,
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: theme.textColor,
        fontSize: '.8rem',
        paddingTop: '.55rem',
        paddingRight: '.55rem',
        svg: {
            transition: 'transform 250ms ease-in-out',
            width: '12px!important',
            height: '12px!important',
        },
    }),
    indicatorSeparator: (base, state) => ({
        ...base,
        display: state.selectProps.isSearchable ? 'static' : 'none',
    }),
    option: (base) => ({
        ...base,
        cursor: 'pointer',
        backgroundColor: 'none',
        transition: '200ms background-color linear',
        '&:hover': {
            backgroundColor: transparentize(0.55, theme.mainElementsColor),
        },
    }),
});
