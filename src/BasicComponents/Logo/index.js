import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LogoContainer } from './UiComponents';

const Logo = ({ white }) => (
    <Link to="/">
        <LogoContainer white={white} />
    </Link>
);

Logo.propTypes = {

};

export default Logo;
