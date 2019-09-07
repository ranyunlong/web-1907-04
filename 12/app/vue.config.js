module.exports = {
    configureWebpack: {
        devServer: {
            port: 3001,
            compress: true,
            // 反向代理
            proxy: {
                // 当webpack的express服务器 发现请求的路径是/baidu开头的地址时
                // 使用对象里面的规则来代理请求

                // http://localhost:3000/baidu
                // https://baidu.com/
                // "/baidu": {
                //     target: "https://baidu.com",
                //     pathRewrite: {
                //         "^/baidu": "/"
                //     }
                // },

                // http://localhost:3001/api/users/login
                // http://localhost:3000/users/login
                // "/api": {
                //     target: "http://localhost:3000",
                //     // 路径重写
                //     pathRewrite: {
                //         "^/api": ""
                //     }
                // },
                // http://localhost:3001/proxyapi/captcha.jpg?uuid=321321321321
                // http://console.ranyunlong.com:8080/renren-fast/captcha.jpg?uuid=321321321321
                "/proxyapi": {
                    // 替换host
                    target: "http://console.ranyunlong.com:8080",
                    // 替换目录
                    pathRewrite: {
                        "^/proxyapi": "/renren-fast"
                    }
                }
            }
        }
    }
}
