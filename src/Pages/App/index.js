import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';
import { graphql } from 'react-apollo';

import HeaderSearchField from 'Components/HeaderSearchField';
import Footer from 'Components/Footer';
import Promotions from 'Components/Promotions';
import SideBar from 'Components/SideBar';
import BackToTop from 'Components/BackToTop';
import MenuItems from '../../../configs/MenuItems';
import { searchHeaderHeight } from '../../config';
import { GET_SEARCHBAR_STATE } from '../../graphQl/schema';
import { ContentWrapper } from './UiComponents';
class App extends Component {
    render() {
        const { data: { openSearchBar }, children } = this.props;
        return (
            <div>
                <HeaderSearchField />
                <Spring
                    from={{ marginTop: '0rem' }}
                    to={{
                        marginTop: openSearchBar ? searchHeaderHeight : '0',
                    }}
                >
                    {(props) => (
                        <ContentWrapper style={props}>
                            <div className="mobile-nav">
                                <div className="amado-navbar-brand">
                                    <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                                </div>
                                <div className="amado-navbar-toggler">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                            <SideBar menuItems={MenuItems} />
                            {children}
                        </ContentWrapper>
                    )}
                </Spring>
                <Promotions />
                <Footer />
                <BackToTop />
            </div>
        );
    }
}

App.propTypes = {};

export default graphql(GET_SEARCHBAR_STATE)(App);
