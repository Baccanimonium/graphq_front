import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from '../AdminFieldWrapper';
import { AdminTextArea } from './UiComponents';

const AdminTextAreaField = ({ label, field, ...props }) => {
    return (
        <InputWrapper label={label}>
            <AdminTextArea {...props} {...field} />
        </InputWrapper>
    );
};

AdminTextAreaField.propTypes = {

};

export default AdminTextAreaField;
