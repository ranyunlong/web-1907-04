module.exports = {
    configureWebpack: {
        devServer: {
            port: 3001,
            compress: true,
            // 反向代理
            proxy: {
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


// [
//     {
//         url: "/roles.html",
//         title: "角色管理"
//     },
//     {
//         url: "/users.html",
//         title: "用户管理"
//     }
// ]
