const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    // entry: "", // 文件的地址
    // entry: [], // 多个文件的地址
    // enter: {}, // key 就是生成的文件名称 value 要编译的文件地址

    // entry: "./src/index.js",
    // entry: {
    //     app: path.resolve("src", "index.js"),
    //     fn: path.resolve("src", "fn.js")
    // },
    entry: {
        app: path.resolve("src", "index.js"),
        fn: path.resolve("src", "fn.js")
    },
    // 输出
    output: {
        // 要输出的目录路径 必须是一个绝对路径 (目录如果不存在 webpack会自动创建)
        path: path.resolve("dist"),
        // 打包后的文件名称
        // 在多js文件的情况下 要给生产的文件名称设置变量
        // 
        filename: "[name].[chunkhash].js",
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
                    {
                        loader: "css-loader",   // 用于解析css文件的,
                    },
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
                // 开发的时候只是自己看 所有base64也可以
                use: "url-loader",

                // 生产的时候要生产成实际的图片文件

                // use: {
                //     loader: "file-loader",
                //     options: {
                //         name: '[name].[hash].[ext]',
                //         publicPath: "/images",
                //         outputPath: "/images"
                //     }
                // }
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
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            // 指定你的html叫啥名称
            filename: "index.html",
            // 指定一个html模板用来结合编译好的css文件和js文件
            template: path.resolve("public", "index.html")
        })
    ],
    // 只有在webpack-dev-server 命令启动的时候才会生效
    // https://www.webpackjs.com/configuration/dev-server/
    devServer: {
        // 端口号
        port: 3000,
        // 是否压缩html文件
        compress: true,
        // 项目启动时 自动打开浏览器
        open: true,
    },
    mode: "development", //production development
}

// 在输出目录 或者生成文件的配置的地方都可以设置这些变量
// 文件名称 [name] 
// 文件后缀 [ext]
// 文件路径 [path]
// 文件hash [hash] 整体所有文件的hash是一样的 只要有一个文件变化 所有文件都会变化
// 当前编译的文件生成的hash字符串 [chunkhash] 哪个文件发生变化 它的hash就会发生变化