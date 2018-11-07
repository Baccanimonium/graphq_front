import React, { Component } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { transparentize } from 'polished';
import { withTheme } from 'styled-components';

import InputWrapper from '../AdminFieldWrapper';

class Creatable extends Component {
    customStyles = () => {
        const { theme } = this.props;
        return ({
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
    };

    setValue = () => {
        const { options, value } = this.props;

        if (value === '') return '';
        if (options && value) {
            return options.find(({ val }) => val === value);
        }
        return undefined;
    };

    handleChange = ({ value }) => {
        const { name, form: { setFieldValue } } = this.props;

        setFieldValue(name, value);
    };

    render() {
        const { label, onCreateOption, options, form, onChange, ...props } = this.props;
        return (
            <InputWrapper label={label}>
                <CreatableSelect
                    {...form}
                    {...props}
                    value={this.setValue()}
                    options={options}
                    styles={this.customStyles()}
                    onCreateOption={onCreateOption}
                    onChange={this.handleChange}
                />
            </InputWrapper>
        );
    }
}

export default withTheme(Creatable);
