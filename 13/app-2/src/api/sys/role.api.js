import { http } from "../../http";


/**
 * GET /sys/role/list
 * 获取角色列表
 */
export function sysRoleList(params = {}) {
    params.page = params.page || 1;
    params.limit = 10;
    return http.get("/sys/role/list", {params})
}