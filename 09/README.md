# webpack

## 1. 初始化项目

```shell
npm init --yes
```

## 2. 安装webpack


1) 本地安装

```shell
npm i webpack webpack-cli
# 或者
yarn add webpack webpack-cli
```

2) 全局安装

```shell
npm i -g webpack webpack-cli
```

### 1.使用webpack
要使用webpack 必须在项目的根目录下创建一个叫 webpack.config.js的配置文件
webpack是用nodejs 编写的 所以 这个配置文件 用node方式导出配置对象

```js
module.exports = {
    // 入口文件 要从哪开始编译js文件
    entry: "",
    // 编译好的js文件应该输出到哪
    output: {},
    // 模块处理工具 用于处理不同的文件 webpack允许你使用第三方工具来进行处理不同的文件
    module: {},
    // 打包时的一些插件
    plugins: [],
    // 开发模式 development 里面没有压缩代码 并且包含了注释
    // 生产模式 production 里面压缩了代码 不包含注释
    mode: "development",
}
```


## loader 

style-loader
css-loader

```shell
npm i style-loader css-loader
# 或者
yarn add style-loader css-loader
```

## 使用webpack的好处

1. 模块化文件  (省去闭包) 模块化更好 管理
2. 压缩代码 （体积更小 不容易读懂）
3. 工程化 (自动处理css 自动处理less sass scss stylus postcss)

## babel的配置文件

可以写入到package.json 的babel选项中
也可以添加到根目录的.babelrc文件中

## postcss
用于给css自动添加前缀 和处理一些背景图片合并 等等功能
需要先创建一个 postcss.config.js 的配置文件

要使用它 需要安装
```shell
npm i autoprefixer postcss postcss-loader
# 或者
yarn add autoprefixer postcss postcss-loader -D
```

```js
module.exports = {
    // postcss的插件
    // autoprefixer 自动添加浏览器的私有前缀
    plugins: [
        require('autoprefixer')
    ]
}
```

## 图片处理

1. 复制图片到另一个目录 file-loader
2. 把图片解析成base64的字符串 url-loader

```shell
npm i url-loader file-loader -D
# 或者
yarn add url-loader file-loader -D
```

## 单文件Vue组件
就是这个文件是一个单独的组件

## yarn 

yarn 管理器 和npm 一样 要使用yarn

```shell
npm i -g yarn
```

