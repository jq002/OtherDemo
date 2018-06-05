
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var isProd = process.env.NODE_ENV === 'production';
module.exports = {
    entry: './src/index.js',
    output: {
         // 输出文件都放到 dist 目录下;必须是 string 类型的绝对路径
        path: __dirname + '/dist',
         // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'js/[name].js'
    },
    devServer: {
        port: 8089,
        open: true,
    },
    devtool: 'source-map',
    //module 配置如何处理模块。
    module: {
        //rules 配置模块的读取和解析规则，通常用来配置 Loader。其类型是一个数组，数组里每一项都描述了如何去处理部分文件。
        rules: [
            {
                //Loader 的执行顺序是由后到前的；每一个 Loader 都可以通过 URL querystring 的方式传入参数
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
                })
                // use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                //Loader 传入属性的方式除了有 querystring 外，还可以通过 Object 传入；
                //除了在 webpack.config.js 配置文件中配置 Loader 外，还可以在源码中指定用什么 Loader 去处理文件。 
                options: {
                    name: 'img/[name].[ext]'
                }
            }
            , {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            }
            // ,{
            //     test: /\.(gif|png|jpe?g|svg)$/i,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //         options: {
            //           name: '[name].[ext]',
            //           outputPath: 'images/'
            //         }
            //       },
            //     ]
            //   },
        ]
    },
    // plugins 属性是一个数组，里面的每一项都是插件的一个实例，在实例化一个组件时可以通过构造函数传入这个组件支持的配置属性。
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            // disable:true
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};