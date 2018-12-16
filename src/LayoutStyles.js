import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

/* eslint-disable no-unused-expressions */

const Global = createGlobalStyle` 
    ${normalize()}
    @font-face {
        font-family: 'helveticaneuebold';
        src: url("/fonts/helvetica_neu_bold-webfont.woff2") format("woff2"),
        url("/fonts/helvetica_neu_bold-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal; 
    }
    @font-face {
        font-family: 'helveticaneuemedium';
        src: url("/fonts/helveticaneue_medium-webfont.woff2") format("woff2"),
        url("/fonts/helveticaneue_medium-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal; 
    }
    @font-face {
        font-family: 'Roboto-Regular';
        src: url("/fonts/Roboto-Regular.ttf") format("ttf");
        font-weight: normal;
        font-style: normal; 
    }
    :root {
        --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",
            Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            
        --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    }
    *, ::after, ::before {
        box-sizing: border-box;
    }
    
    button {
      outline: 0!important;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    body {
        font-family: helveticaneuemedium;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        color: #212529;
        text-align: left;
        background-color: #fff;
        margin: 0;
    }
    h2 {
        font-size: 36px;
    }
    h4 {
        margin: 0;
        font-size: 24px;
        line-height: 1.3;
        font-weight: 600;
        color: ${({ theme }) => theme.headersColor};
    }
    h5 {
        font-size: 18px;
    }
    p {
        line-height: 1.9;
    }
    ul {
      padding: 0;
      list-style: none;
    }
`;

export default Global;
