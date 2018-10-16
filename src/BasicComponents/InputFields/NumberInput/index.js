import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputContainer, NumberInputField, Label, DecrementIcon, IncrementIcon } from './UiComponents';

const DECREMENT = 'decrement';
const INCREMENT = 'increment';

class NumberInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value ? props.value : 0,
        };
    }

    updateValue = ({ target: { value } }, type) => {
        this.setState((prevState) => {
            const getValue = () => {
                switch (type) {
                    case INCREMENT:
                        return parseInt(prevState.value, 0) + 1;
                    case DECREMENT:
                        return prevState.value - 1;
                    default:
                        return value;
                }
            };
            return ({
                value: getValue(),
            });
        });
    };

    render() {
        const { label, value: val, ...props } = this.props;
        const { value } = this.state;
        return (
            <InputContainer>
                <Label>{label}</Label>
                <NumberInputField value={value} onChange={this.updateValue} {...props} />
                <IncrementIcon onClick={(e) => this.updateValue(e, INCREMENT)} />
                <DecrementIcon onClick={(e) => this.updateValue(e, DECREMENT)} />
            </InputContainer>
        );
    }
}

NumberInput.propTypes = {

};

export default NumberInput;
