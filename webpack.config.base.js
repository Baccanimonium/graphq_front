import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
    },
    resolve: {
        alias: {
            BasicComponents: path.resolve(__dirname, 'src/BasicComponents/'),
            Components: path.resolve(__dirname, 'src/Components/'),
            Pages: path.resolve(__dirname, 'src/Pages/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                type: 'javascript/auto',
                use: [require.resolve('json-loader')],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },

            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.svg$/,
                loaders: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10 * 1024,
                            name: '[path][name].[hash].[ext]',
                        },
                    },
                    { loader: 'image-webpack-loader' },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
    ],
};
