
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin= require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    devServer:{
        port:8089,
        open:true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: ['css-loader', 'sass-loader']
                // })
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            hash: true
        }),
        new ExtractTextPlugin({
            filename:'css/[name].css',
            disable:true
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};