const path = require('path');

module.exports = {
    // 设置入口文件
    entry: './src/index.js',

    // 指定打包后的输出位置和文件名
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // 配置模块如何被打包
    module: {
        rules: [

            {
                // 对于 JavaScript 文件的 Babel 转译
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    // 配置开发工具
    devtool: 'source-map',
    mode: 'development',
    // 配置开发服务器
    devServer: {
        contentBase: './dist',
        open: true
    }
};