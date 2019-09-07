import axios from "axios";

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
    // console.log("axios 正在发起请求，请求的参数是", option);
    // console.log(option);
    option.headers.token = localStorage.getItem("token");

    return option;
})


/**
 * 响应拦截器
 * 在axios 每次请求收到结果 都会被这里拦截到 
 * http.interceptors.response
 */

http.interceptors.response.use(function(response) {
    // console.log("axios 收到了响应结果，结果是", response);
    return response;
})



