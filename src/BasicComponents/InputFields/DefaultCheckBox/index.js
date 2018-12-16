import React from 'react';
import PropTypes from 'prop-types';
import { CheckBoxContainer, Label } from './UiComponents';

const CheckBox = ({ label, id, onClick, ...props }) => (
    <CheckBoxContainer {...props}>
        <input id={id} type="checkbox" />
        <Label htmlFor={id} onClick={onClick}>{label}</Label>
    </CheckBoxContainer>
);

CheckBox.propTypes = {

};

export default CheckBox;
