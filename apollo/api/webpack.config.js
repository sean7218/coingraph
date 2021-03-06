const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: ['webpack/hot/poll?1000', path.join(__dirname, 'src/main.ts')],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [ 
                    'ts-loader',
                    'prettier-loader',
                    'eslint-loader',
                ],
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development',
    target: 'node',
    externals: [
        nodeExternals({whitelist: ['webpack/hot/poll?1000']})
    ],
    devtool: 'inline-source-map',
    watch: true
}