'use strict';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import webpackConfig from './webpack.config.dev';
import base from './webpack.config.base';

const options = {
    host: 'localhost',
    port: '3000',

    contentBase: base.output.path,
    historyApiFallback: true,
    hot: true,
    publicPath: base.output.publicPath,
    headers: {
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, *',
    },
    stats: { colors: true },
    proxy:
        [{
            context: ['/graphql', '/assets'],
            target: 'http://localhost:3001',
        }],
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, options);

new WebpackDevServer(webpack(webpackConfig), options).listen(3000, 'localhost', (error) => {
    if (error) {
        console.log(error); // eslint-disable-line no-console
    }

    console.log('Listening at localhost:3000.'); // eslint-disable-line no-console
});
