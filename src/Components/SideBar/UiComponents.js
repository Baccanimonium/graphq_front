import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { opencart } from 'react-icons-kit/fa/opencart';
import { starO } from 'react-icons-kit/fa/starO';
import { search } from 'react-icons-kit/oct/search';
import { pinterest } from 'react-icons-kit/fa/pinterest';
import { instagram } from 'react-icons-kit/fa/instagram';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';

import { LinkStyle } from 'BasicComponents/Link/UiComponents';
import { HoveredYellowButton } from 'BasicComponents/Buttons/UiComponents';
import { YellowHoverItem } from 'BasicComponents/CommonUiComponents';
import CloseButton from 'BasicComponents/CloseButton';

export const SideBarWrapper = styled.header`
    transition-duration: 500ms;
    position: relative;
    z-index: 1;
    width: auto;
    max-width: 320px;
    background-color: ${({ theme }) => theme.defaultColor};
    padding: 3.75rem 4.6875rem;
`;

export const LogoSpacer = styled.div`
    margin-bottom: 6.25rem;
`;

export const NavMenu = styled.nav`
    padding: 0;
`;

export const NavMenuList = styled.ul`
    padding: 0;
`;

export const MenuItemContainer = styled.li`
    padding: 1.25rem 0;
    list-style: none;
`;

export const MenuLink = styled(NavLink)`
    ${LinkStyle};
    font-size: 14px;
    &.active, :hover {
        ::after {
            left: -75px
        }
        color: ${({ theme }) => theme.mainElementsColor};
    }
    ::after {
        transition-duration: 500ms;
        width: 30px;
        height: 3px;
        position: absolute;
        top: 50%;
        margin-top: -1.5px;
        left: -150px;
        background-color: ${({ theme }) => theme.mainElementsColor};
        z-index: 10;
        content: '';
    }
`;

export const ButtonsWrapper = styled.div`
    margin: 1.875rem 0 6.25rem;
`;

export const YellowButton = styled(HoveredYellowButton)`
    margin-bottom: 0.9375rem;
`;

export const ActionsWrapper = styled.div`
    margin-bottom: 6.25rem;
`;

export const ActionContainer = styled.div`
    display: flex;
    padding: 0.9375rem 0;
    font-size: 16px;
`;

export const CartIcon = styled(Icon).attrs({
    icon: opencart,
    size: '18',
})`
    margin-right: 0.625rem;
`;

export const StarIcon = styled(Icon).attrs({
    icon: starO,
    size: '18',
})`
    margin-right: 0.625rem;
`;

export const SearchIcon = styled(Icon).attrs({
    icon: search,
    size: '18',
})`
    margin-right: 0.625rem;
    position: relative;
    top: 2px;
`;

export const ActionAccent = styled.span`
    cursor: pointer;
    ${YellowHoverItem};
    text-transform: uppercase;
`;

export const SocialsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PinterestIcon = styled(Icon).attrs({
    icon: pinterest,
    size: '18',
})`
`;
export const InstagrammIcon = styled(Icon).attrs({
    icon: instagram,
    size: '18',
})`
`;
export const FacebookIcon = styled(Icon).attrs({
    icon: facebook,
    size: '18',
})`
`;
export const TwitterIcon = styled(Icon).attrs({
    icon: twitter,
    size: '18',
})`
`;

export const StyledCloseButton = styled(CloseButton)`
    position: absolute;
    top: 0;
    right: 0;
    @media(min-width: 500px) {
        display: none;
    }
`;
