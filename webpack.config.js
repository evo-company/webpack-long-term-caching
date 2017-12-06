const path = require('path');
const webpack = require('webpack');
const NameAllModulesPlugin = require('name-all-modules-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new ManifestPlugin(),
        // plugins for proper chunks naming
        new webpack.NamedChunksPlugin((chunk) => {
            if (chunk.name) { 
                return chunk.name; 
            } 
            return chunk.modules.map(m => path.relative(m.context, m.request)).join("_");
        }),
        new webpack.NamedModulesPlugin(),
        new NameAllModulesPlugin(),
    ]
};
