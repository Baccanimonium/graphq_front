import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class AdminRoute extends Component {
    render() {
        return (
            <Product />
        );
    }
}

AdminRoute.propTypes = {};

export default AdminRoute;
