const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');//
const config = {
    devtool: 'source-map',
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
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
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
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'url-loader?limit=10000'
            },
        ]
    }
};

module.exports = config;
