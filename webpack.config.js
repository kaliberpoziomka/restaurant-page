let HtmlPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlPlugin({
            template: "./src/main.html"
        })
    ],
    devServer: {
        open: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}