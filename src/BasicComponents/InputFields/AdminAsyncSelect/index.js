import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AsyncSelect from 'react-select/lib/Async';
import selectStyles from '../SelectStyles';
import { InputComponent, renderOption } from '../SelectComponents';

const components = {
    Input: InputComponent,
    Option: renderOption,
};

export default class AsyncMulti extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        loadFunc: PropTypes.func.isRequired,
    };

    handleChange = (option) => {
        const { onChange } = this.props;
        onChange(option.value);
    };

    render() {
        const { loadFunc } = this.props;
        return (
            <AsyncSelect
                styles={selectStyles}
                cacheOptions
                defaultOptions
                loadOptions={loadFunc}
                components={components}
                onChange={this.handleChange}
            />
        );
    }
}
