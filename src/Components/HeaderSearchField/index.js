import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import { Transition } from 'react-spring';
import { withRouter } from 'react-router';

import AsyncSelect from 'BasicComponents/InputFields/AdminAsyncSelect';
import { SearchHeaderWrapper, StyledCloseButton, AccentSpan } from './UiComponents';
import { GET_SEARCHBAR_STATE, TOGGLE_SEARCHBAR_STATE, SEARCH_PRODUCTS } from '../../graphQl/schema';
import { searchHeaderHeight, PRODUCT_PAGE } from '../../config';


const animationsConstants = {
    from: { top: `-${searchHeaderHeight}` },
    enter: { top: '0px' },
    leave: { top: `-${searchHeaderHeight}` },
};

const animationWrapperStyles = { left: '0', right: '0', zIndex: '5', position: 'fixed' };

class SearchField extends Component {
    searchProducts = async (value) => {
        const { searchProducts: { refetch } } = this.props;
        if (value.left < 1) return [];
        const { data: { searchProducts } } = await refetch({ name: value });
        return searchProducts.map(({ name, id, price }) => ({
            label: name,
            value: id,
            optionComponent: <div>Price: <AccentSpan>${price}</AccentSpan></div>,
        }));
    };

    handleChoose = (value) => {
        const { history: { push }, toggleSearchBarState } = this.props;
        push(`${PRODUCT_PAGE}/${value}`);
        toggleSearchBarState();
    };

    render() {
        const { data: { openSearchBar }, toggleSearchBarState } = this.props;
        return (
            <Transition items={openSearchBar} {...animationsConstants}>
                {(shouldRender) => shouldRender && ((styles) => (
                    <div style={{ ...animationWrapperStyles, ...styles }}>
                        <SearchHeaderWrapper height={searchHeaderHeight}>
                            <StyledCloseButton onClick={toggleSearchBarState} />
                            <AsyncSelect onChange={this.handleChoose} loadFunc={this.searchProducts} />
                        </SearchHeaderWrapper>
                    </div>
                ))}
            </Transition>
        );
    }
}

SearchField.propTypes = {
    data: PropTypes.shape({}).isRequired,
    toggleSearchBarState: PropTypes.func.isRequired,
};

export default compose(
    withRouter,
    graphql(GET_SEARCHBAR_STATE),
    graphql(TOGGLE_SEARCHBAR_STATE, { name: 'toggleSearchBarState' }),
    graphql(SEARCH_PRODUCTS, { name: 'searchProducts' }),
)(SearchField);
