// vue.config.js
module.exports = {
    // 把webpack的配置 添加到这个选项中 会被合并到vue的webpack配置当中
    configureWebpack: {
        devServer: {
            port: 3000
        }
    }
}