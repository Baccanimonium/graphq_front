import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from '../AdminFieldWrapper';
import { AdminInputField } from './UiComponents';

const InputField = ({ label, field, ...props }) => {
    return (
        <InputWrapper label={label}>
            <AdminInputField {...props} {...field} />
        </InputWrapper>
    );
};

InputField.propTypes = {

};

export default InputField;
