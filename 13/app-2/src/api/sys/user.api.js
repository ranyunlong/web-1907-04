import { http } from "../../http";


/**
 * GET /sys/user/list
 * 获取管理员列表
 */
export function sysUserList(params = {}) {
    params.page = params.page || 1;
    params.limit = 10;
    return http.get("/sys/user/list", {params})
}