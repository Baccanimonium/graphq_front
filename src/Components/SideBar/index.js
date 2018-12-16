import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import memoize from 'memoize-one';
import { graphql, compose } from 'react-apollo';
import Logo from 'BasicComponents/Logo';
import Link from 'BasicComponents/Link';
import { BlackButton } from 'BasicComponents/Buttons/UiComponents';
import { TOGGLE_SEARCHBAR_STATE, GET_CART_STATE } from '../../graphQl/schema';
import { CHECK_OUT_PAGE } from '../../config';
import { SideBarWrapper, LogoSpacer, NavMenu, MenuItemContainer, NavMenuList, MenuLink, ButtonsWrapper, YellowButton,
    ActionsWrapper, CartIcon, SearchIcon, ActionContainer, StarIcon, ActionAccent, SocialsWrapper,
    TwitterIcon, FacebookIcon, PinterestIcon, InstagrammIcon, StyledCloseButton } from './UiComponents';

const memoizedItems = (memoize((items, pathname) => items.map(({ label, link }) => (
    <MenuItemContainer key={label}>
        <MenuLink to={link} exact={(label !== 'Shop') || (label === 'Shop' && !pathname.match('/shop'))} strict>
            {label}
        </MenuLink>
    </MenuItemContainer>
))));

const SideBar = ({ menuItems, toggleSearchBar, cartState: { cart }, location: { pathname } }) => {
    const menu = memoizedItems(menuItems, pathname);
    return (
        <SideBarWrapper>
            <StyledCloseButton />
            <LogoSpacer>
                <Logo />
            </LogoSpacer>
            <NavMenu>
                <NavMenuList>
                    {menu}
                </NavMenuList>
            </NavMenu>
            <ButtonsWrapper>
                <Link to={{ pathname: '/', search: '?discount=true' }}>
                    <YellowButton>%Discount%</YellowButton>
                </Link>
                <Link to={{ pathname: '/', search: '?created=desc' }}>
                    <BlackButton>New this week</BlackButton>
                </Link>
            </ButtonsWrapper>
            <ActionsWrapper>
                <ActionContainer>
                    <CartIcon />
                    <Link to={CHECK_OUT_PAGE}>Cart ({cart.length})</Link>
                </ActionContainer>
                <ActionContainer>
                    <StarIcon />
                    <Link to={{ pathname: '/', search: '?Favourite=true' }}>Favourite</Link>
                </ActionContainer>
                <ActionContainer>
                    <SearchIcon />
                    <ActionAccent onClick={toggleSearchBar}>Search</ActionAccent>
                </ActionContainer>
            </ActionsWrapper>
            <SocialsWrapper>
                <Link href="#"><PinterestIcon /></Link>
                <Link href="#"><InstagrammIcon /></Link>
                <Link href="#"><FacebookIcon /></Link>
                <Link href="#"><TwitterIcon /></Link>
            </SocialsWrapper>
        </SideBarWrapper>
    );
};

SideBar.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    toggleSearchBar: PropTypes.func.isRequired,
    cartState: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
};

export default compose(
    withRouter,
    React.memo,
    graphql(TOGGLE_SEARCHBAR_STATE, { name: 'toggleSearchBar' }),
    graphql(GET_CART_STATE, { name: 'cartState' }),

)(SideBar);
