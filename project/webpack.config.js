const path = require('path');
const dist = path.join(__dirname, 'dist');
const src = path.join(__dirname, 'src');

module.exports = {
    mode: 'development',
    entry: path.join(src, 'index.ts'),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: dist,
        watchContentBase: true
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: dist
    },
};
