import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { InputContainer, NumberInputField, Label, DecrementIcon, IncrementIcon } from './UiComponents';

const DECREMENT = 'decrement';
const INCREMENT = 'increment';

class NumberInput extends PureComponent {
    updateValueHandler = (value, type) => {
        switch (type) {
            case INCREMENT:
                return value + 1;
            case DECREMENT:
                return value - 1 > 0 ? value - 1 : 0;
            default:
                return value;
        }
    };

    updateValue = ({ target: { value } }, type) => {
        const { field: { onChange, name, value: val = 0 } } = this.props;
        return onChange({ target: { value: this.updateValueHandler(value || val, type), name } });
    };

    increment = (e) => this.updateValue(e, INCREMENT);

    decrement = (e) => this.updateValue(e, DECREMENT);

    render() {
        const { label, field, ...props } = this.props;
        return (
            <InputContainer>
                <Label>{label}</Label>
                <NumberInputField {...props} {...field} onChange={this.updateValue} />
                <IncrementIcon onClick={this.increment} />
                <DecrementIcon onClick={this.decrement} />
            </InputContainer>
        );
    }
}

NumberInput.propTypes = {
    label: PropTypes.string.isRequired,
    field: PropTypes.shape().isRequired,
};

export default NumberInput;
