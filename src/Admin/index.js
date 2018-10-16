import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class AdminRoute extends Component {
    render() {
        return (
            <div>
                <Product />
            </div>
        );
    }
}

AdminRoute.propTypes = {};

export default AdminRoute;
