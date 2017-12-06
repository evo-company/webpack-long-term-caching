const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    },
};
