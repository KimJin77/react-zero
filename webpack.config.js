const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //混淆js

const path = require('path');//
const config = {
    devtool: 'source-map',
    mode: 'development',
    // 配置文件入口
    entry:{
        //主入口，个人代码打包
        index:'./src/index',
        //react 入口 包括react,react-dom,react-router-dom,redux
        vendor:[
            'react',
            'react-dom',
            'react-router-dom',
            'redux'
        ]
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title:'全栈工程师的进阶路程',
                template: './view/index.html',
                inject: 'body',
                favicon:'./view/home.ico'
            }
        ),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        }),
        new webpack.HotModuleReplacementPlugin({
            // Options...
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'url-loader?limit=10000000'
            },
        ]
    }
};

module.exports = config;
