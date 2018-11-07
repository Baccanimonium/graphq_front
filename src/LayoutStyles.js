import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

/* eslint-disable no-unused-expressions */

const Global = createGlobalStyle` 
        ${normalize()}
        @font-face {
            font-family: 'helveticaneuebold';
            src: url("../public/fonts/helvetica_neu_bold-webfont.woff2") format("woff2"),
            url("../public/fonts/helvetica_neu_bold-webfont.woff") format("woff");
            font-weight: normal;
            font-style: normal; 
        }
        @font-face {
            font-family: 'helveticaneuemedium';
            src: url("../public/fonts/helveticaneue_medium-webfont.woff2") format("woff2"),
            url("../public/fonts/helveticaneue_medium-webfont.woff") format("woff");
            font-weight: normal;
            font-style: normal; 
        }
        @font-face {
            font-family: 'Roboto-Regular';
            src: url("../public/fonts/Roboto-Regular.ttf") format("ttf");
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
        body {
            font-family: "Roboto-Regular";
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
        p {
            line-height: 1.9;
        }
`;

export default Global;
