import React, { Component } from 'react';
import Select from 'react-select';
import { withTheme } from 'styled-components';

import selectStyles from '../SelectStyles';

import InputWrapper from '../AdminFieldWrapper';

class Creatable extends Component {
    setValue = () => {
        const { options, value } = this.props;

        if (value === '') return '';
        if (options && value) {
            return options.find(({ val }) => val === value);
        }
        return undefined;
    };

    handleChange = (option) => {
        const { field: { name }, form: { setFieldValue }, isMulti } = this.props;
        if (isMulti) {
            setFieldValue(name, option.map(({ value }) => value));
        } else {
            setFieldValue(name, option.value);
        }
    };

    render() {
        const { label, options, form, onChange, theme, ...props } = this.props;
        return (
            <InputWrapper label={label}>
                <Select
                    {...form}
                    {...props}
                    value={this.setValue()}
                    options={options}
                    styles={selectStyles(theme)}
                    onChange={this.handleChange}
                />
            </InputWrapper>
        );
    }
}

export default withTheme(Creatable);
