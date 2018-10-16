import styled from 'styled-components';
import logo from '../../../assets/logo.png';
import whiteLogo from '../../../assets/logo2.png';

export const LogoContainer = styled.img.attrs({
    src: (props) => (props.white ? whiteLogo : logo),
})``;
