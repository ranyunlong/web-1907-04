import { http } from "../../http";

/**
 * GET /sys/user/info
 */
export function sysUserInfo() {
    return http.get("/sys/user/info");
}