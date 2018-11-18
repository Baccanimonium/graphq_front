import React from 'react';
import PropTypes from 'prop-types';
import { CheckBoxContainer, Label } from './UiComponents';

const CheckBox = ({ label, id, ...props }) => (
    <CheckBoxContainer {...props}>
        <input id={id} type="checkbox" />
        <Label htmlFor={id}>{label}</Label>
    </CheckBoxContainer>
);

CheckBox.propTypes = {

};

export default CheckBox;
