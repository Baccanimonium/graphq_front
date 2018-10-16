import { Children } from 'react';
import styledNormalize from 'styled-normalize'
import { withTheme, injectGlobal } from 'styled-components';

/* eslint-disable no-unused-expressions */

const Global = ({ theme, children }) => {
    injectGlobal` 
        ${styledNormalize}
        :root {
            --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",
                Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                
            --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
        }
        *, ::after, ::before {
            box-sizing: border-box;
        }
        body {
            font-family: var(--font-family-sans-serif);
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5;
            color: #212529;
            text-align: left;
            background-color: #fff;
        }
        h2 {
            font-size: 36px;
        }
        h4 {
            margin: 0;
            font-size: 24px;
            line-height: 1.3;
            font-weight: 600;
            color: ${theme.headersColor};
        }
        p {
            line-height: 1.9;
        }
    `;
    return Children.only(children);
};

export default withTheme(Global);
