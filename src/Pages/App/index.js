import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';
import { graphql, compose } from 'react-apollo';

import HeaderSearchField from 'Components/HeaderSearchField';
import Footer from 'Components/Footer';
import Promotions from 'Components/Promotions';
import SideBar from 'Components/SideBar';
import BackToTop from 'Components/BackToTop';
import MenuItems from '../../../configs/MenuItems';
import { searchHeaderHeight } from '../../config';
import { ADD_CART_ITEM, GET_SEARCHBAR_STATE } from '../../graphQl/schema';
import { ContentWrapper } from './UiComponents';

class App extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    componentDidMount() {
        const { addCartItem } = this.props;
        addCartItem();
    }

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


export default compose(
    graphql(GET_SEARCHBAR_STATE),
    graphql(ADD_CART_ITEM, { name: 'addCartItem' })
)(App);
