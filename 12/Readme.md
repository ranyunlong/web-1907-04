# 跨域处理方案

1. 如果服务器可以修改 可以直接修改服务器的响应头允许跨域
```js

```
2. 如果服务器不能更改 可以利用webpack的开发服务器 来做反向代理请求
```js

```

## axios 用法

```js

// get 请求 传递queryString参数 使用params
http.get("/users/login", {
        params: this.form
    })

// post 请求 传递body参数 直接使用第二个参数
http.post("/users/login", this.form);

// post 请求 也支持把参数 直接添加到第二个参数 的data选项中
http
    .post("/users/login", {
        params: {
            a: 100
        },
        data: this.form,
    })
```


## 练习服务器地址

http://console.ranyunlong.com:8080/renren-fast

例如 验证码
http://console.ranyunlong.com:8080/renren-fast/captcha.jpg?uuid=xxx




## 练习

1. 使用axios + uuid + validator 库等去编写登录操作

要求登录之后跳转至 管理首页（管理首页默认是不能访问的 必须登录后台能访问）

2. 模仿https://console.ranyunlong.com (用自己的账号登录后可以看)网站

编写 管理员列表的页面
编写 角色管理的页面