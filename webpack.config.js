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
                //好像没用
                title:'全栈工程师的进阶路程',
                //模板地址
                template: './view/index.html',
                //注入body
                inject: 'body',
                favicon:'./view/home.ico',
                //文件名
                filename: 'index.html',
                hash: false,
                // 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
                // 在项目后续过程中，经常需要做些改动更新什么的，一但有改动，客户端页面就会自动更新！
                showErrors: true,
			    // 是否将错误信息输出到html页面中
                minify: {
                    // 压缩HTML文件
                    removeComments: true,
                    // 移除HTML中的注释

                    collapseWhitespace: true
                    // 删除空白符与换行符
                }
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
