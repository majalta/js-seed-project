var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sample.js'
    },
    target: 'web',
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }],
        }]
    },
    resolve: {
        extensions: ['.js'],
        modules: ['src', 'node_modules'],
    },
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'expose-loader?Promise!promise-polyfill'
        })
    ],
    stats: {
        colors: true
    }
};
