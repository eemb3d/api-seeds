const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    },
    entry: './bin/www',
    externals: [nodeExternals()],
    mode: 'production',
    target: 'node'
};
