const path = require('path');
const webpack = require('webpack');
const NameAllModulesPlugin = require('name-all-modules-plugin');

const isVendor = (opts) => (
    opts.userRequest && opts.userRequest.indexOf('node_modules') >= 0
);

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: isVendor
        }),
        // runtime chunk
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        // plugins for proper chunks naming
        new webpack.NamedChunksPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new NameAllModulesPlugin(),
    ]
};
