import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import { Transition } from 'react-spring';

import AsyncSelect from 'BasicComponents/InputFields/AdminAsyncSelect';
import { SearchHeaderWrapper, StyledCloseButton } from './UiComponents';
import { GET_SEARCHBAR_STATE, TOGGLE_SEARCHBAR_STATE } from '../../graphQl/schema';
import { searchHeaderHeight } from '../../config';


const animationsConstants = {
    from: { top: `-${searchHeaderHeight}` },
    enter: { top: '0px' },
    leave: { top: `-${searchHeaderHeight}` },
};

const animationWrapperStyles = { left: '0', right: '0', zIndex: '5', position: 'fixed' };

class SearchField extends Component {
    render() {
        const { data: { openSearchBar }, toggleSearchBarState } = this.props;
        return (
            <Transition {...animationsConstants}>
                {openSearchBar && ((styles) => (
                    <div style={{ ...animationWrapperStyles, ...styles }}>
                        <SearchHeaderWrapper height={searchHeaderHeight}>
                            <StyledCloseButton onClick={toggleSearchBarState} />
                            <AsyncSelect loadFunc={() => null} />
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
    graphql(GET_SEARCHBAR_STATE),
    graphql(TOGGLE_SEARCHBAR_STATE, { name: 'toggleSearchBarState' }),
)(SearchField);
