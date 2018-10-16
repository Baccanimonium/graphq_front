import React from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';
import { Mutation } from 'react-apollo';

import Logo from 'BasicComponents/Logo';
import Link from 'BasicComponents/Link';
import { BlackButton } from 'BasicComponents/Buttons/UiComponents';
import { TOGGLE_SEARCHBAR_STATE } from '../../graphQl/schema';
import { SideBarWrapper, LogoSpacer, NavMenu, MenuItemContainer, NavMenuList, MenuLink, ButtonsWrapper, YellowButton,
    ActionsWrapper, CartIcon, SearchIcon, ActionContainer, StarIcon, ActionAccent, SocialsWrapper,
    TwitterIcon, FacebookIcon, PinterestIcon, InstagrammIcon, StyledCloseButton } from './UiComponents';

const memoizedItems = (memoize((items) => items.map(({ label, link }) => (
    <MenuItemContainer key={label}>
        <MenuLink to={link}>
            {label}
        </MenuLink>
    </MenuItemContainer>
))));

const SideBar = ({ menuItems }) => {
    const menu = memoizedItems(menuItems);
    return (
        <Mutation mutation={TOGGLE_SEARCHBAR_STATE}>
            {(toggleSearchBar) => (
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
                        <YellowButton>%Discount%</YellowButton>
                        <BlackButton>New this week</BlackButton>
                    </ButtonsWrapper>
                    <ActionsWrapper>
                        <ActionContainer>
                            <CartIcon />
                            <Link to="/cart">Cart (0)</Link>
                        </ActionContainer>
                        <ActionContainer>
                            <StarIcon />
                            <Link to="/Favourite">Favourite</Link>
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
            )}
        </Mutation>
    );
};

SideBar.propTypes = {

};

export default SideBar;
