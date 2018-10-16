import React from 'react';
import PropTypes from 'prop-types';
import { CloseButtonContainer, CloseButtonIcon } from './UiComponents';

const CloseButton = (props) => (
    <CloseButtonContainer {...props}>
        <CloseButtonIcon />
    </CloseButtonContainer>
);

CloseButton.propTypes = {

};

export default CloseButton;
