import { http } from "../http";


/**
 * 用户登录
 * @param {Object} data
 * 1. username 用户名
 * 2. password 密码
 * 3. uuad 验证码的uuid
 * 4. captcha 验证码 
 * @url /sys/login
 * @method post
 */
export function login (data) {
    return http.post("/sys/login", data);
}