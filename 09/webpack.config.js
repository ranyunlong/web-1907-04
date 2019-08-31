const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    // entry: "", // 文件的地址
    // entry: [], // 多个文件的地址
    // enter: {}, // key 就是生成的文件名称 value 要编译的文件地址

    // entry: "./src/index.js",
    entry: path.resolve("src", "index.js"),
    // 输出
    output: {
        // 要输出的目录路径 必须是一个绝对路径 (目录如果不存在 webpack会自动创建)
        path: path.resolve("dist"),
        // 打包后的文件名称
        filename: "bundle.js",
    },
    // 添加模块处理工具
    module: {
        // 模块处理规则
        // 定义什么文件 由什么工具来处理
        rules: [
            // 一个对象一个规则
            {
                //包含一个正则表达式 匹配文件名称的
                test: /\.css$/, 
                use: [
                    // 都需要使用npm下载
                    "style-loader", // 用于给css文件包装一个style标签
                    "css-loader",   // 用于解析css文件的
                    "postcss-loader", // postcss 处理器
                ],
            },
            {
                //包含一个正则表达式 匹配文件名称的
                test: /\.less$/, 
                use: [
                    // 都需要使用npm下载
                    "style-loader", // 用于给css文件包装一个style标签
                    "css-loader",   // 用于解析css文件的
                    "less-loader",  // 用于解析less文件的loader
                    "postcss-loader", // postcss 处理器
                ],
            },
            {
                test: /\.js$/,
                // 排除哪些目录的js文件不编译
                exclude: /node_modules/,
                use: "babel-loader",
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         // babel的预设 使用预设的模式来解析js
                //         presets: ['@babel/preset-env']
                //     }
                // }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                // use: "url-loader"
                use: "file-loader",
            },
            {
                test: /\.vue$/,
                // 利用vue-loader 把vue文件编译成一个js对象
                // 把css 使用style-loader和css-loader来处理
                // 把js 使用vue-loader 中 babel-loader
                // 把template 使用vue的组件中的render选项来进行处理
                use: "vue-loader",
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: "development", //production development
}