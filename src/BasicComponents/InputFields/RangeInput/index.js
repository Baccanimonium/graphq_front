import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import { InputStyles } from './UiComponents';

const RangeInput = ({ value, onChange, maxValue, minValue }) => (
    <InputStyles>
        <InputRange
            value={value}
            onChange={onChange}
            minValue={minValue}
            maxValue={maxValue}
        />
    </InputStyles>
);

RangeInput.propTypes = {

};

export default RangeInput;
