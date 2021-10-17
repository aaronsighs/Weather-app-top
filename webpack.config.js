const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.ts'),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'dev',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        clean: true,
        publicPath: '',
    },
    module: {
        rules: [{
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },


        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },

};