import { http } from "../../http";

/**
 * 获取系统菜单
 * GET /sys/menu/nav
 */
export function sysMenuNav() {
    return http.get("/sys/menu/nav");
}