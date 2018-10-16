import React from 'react';
import PropTypes from 'prop-types';
import { CustomA, CustomLink } from './UiComponents';


const Link = (props) => {
    const { children, href } = props;
    const LinkComponent = href ? CustomA : CustomLink;

    return (
        <LinkComponent {...props}>
            {children}
        </LinkComponent>
    );
};

Link.propTypes = {

};

export default Link;
