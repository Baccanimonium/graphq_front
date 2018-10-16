import React from 'react';
import PropTypes from 'prop-types';
import { FooterContainer } from './UiComponents';
import Logo from 'BasicComponents/Logo';

const Footer = (props) => (
    <FooterContainer className="footer_area clearfix">
        <Logo white />
    </FooterContainer>
);

Footer.propTypes = {

};

export default Footer;
