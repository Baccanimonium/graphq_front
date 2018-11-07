import React, { Component } from 'react';

import AsyncSelect from 'react-select/lib/Async';
import selectStyles from '../SelectStyles';
import { InputComponent } from '../SelectComponents';

export default class AsyncMulti extends Component {
    render() {
        const { loadFunc } = this.props;
        return (
            <AsyncSelect
                styles={selectStyles}
                isMulti
                cacheOptions
                defaultOptions
                loadOptions={loadFunc}
                components={{ Input: InputComponent }}
            />
        );
    }
}
