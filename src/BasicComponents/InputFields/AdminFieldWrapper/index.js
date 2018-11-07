import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, FieldLabel } from './UiComponents';

const AdminFieldWrapper = ({ label, children }) => {
    return (
        <Wrapper>
            <FieldLabel>{label}</FieldLabel>
            {children}
        </Wrapper>
    );
};

AdminFieldWrapper.propTypes = {

};

export default AdminFieldWrapper;
