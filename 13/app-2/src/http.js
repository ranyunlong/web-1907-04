import axios from "axios";
import router from "./router";
import iview, { Notice } from "iview";


export const baseURL = "/proxyapi";

// 创建一个ajax
export const http = axios.create({
    // 基础路径
    baseURL,
    // headers: {
    //     token: Math.random()
    // }
});


/**
 * 请求拦截器
 * 在axios 每次发起http请求时 都会被这里拦截到 
 * http.interceptors.request
 * 
 */

http.interceptors.request.use(function(option) {
    
    // token是通过拦截器拦截之后 通过headers 传递到后端的
    option.headers.token = localStorage.getItem("token");

    return option;
})


/**
 * 响应拦截器
 * 在axios 每次请求收到结果 都会被这里拦截到 
 * http.interceptors.response
 */

http.interceptors.response.use(function(response) {
    const { code, msg } = response.data;
    // 等于401 
    // 第一种情况 用户篡改了token
    // 第二种情况 登录确实过期了
    if (code !== 0) {
        if (code === 401) {
            localStorage.removeItem("token");
            router.replace("/login.html");
    
            Notice.error({
                title: "提示",
                desc: msg
            })
        } else {
            Notice.error({
                title: "提示",
                desc: msg
            })
        }
    }
    return response;
})



