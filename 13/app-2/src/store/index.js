import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import { login } from "../api/login.api";
import { sysUserInfo } from "../api/sys/user.info.api";
import router from "../router";

Vue.use(Vuex);

// 启动vuex之前 检查本地存储里是否有缓存的user
// 配合本地存储来持久化数据
const user = localStorage.getItem("user");

// 创建一个vuex 状态管理器
export default new Vuex.Store({
    // 初始化数据
    state: {
        user: user ? JSON.parse(user) : null,
        token: null,
    },

    // 可以获取state里的任意一个数据
    getters: {
        // 订阅数据
        user(state) {
            return state.user
        }
    },

    // 修改数据
    mutations: {
        changeUser(state, newUser) {
            state.user = newUser;
            // 永久存储
            localStorage.setItem("user", JSON.stringify(newUser));

            // 浏览器会认为是在切换页面 所以会把页面里的window 对象初始化
            // 以前保存的变量就会丢失
            // vuex 就是在window 下的一个变量 保存了一些全局数据
            // history.back()

            // 跳转页面的时候 vue-router跳转页面时
            // 没有真真的跳转页面 而是给历史记录里添加了一个记录
            // 然后重新显示了一个div
            
        },
        setToken(state, token) {
            // 在vuex里保存token
            state.token = token;
            // 在本地存储里保存token
            if (token) {
                localStorage.setItem("token", token);
            } else {
                localStorage.removeItem("token");
            }
        },
        setUser(state, user) {
            // 在vuex里保存user
            state.user = user;
            // 在本地存储里保存user
            if (typeof user === "object") {
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                localStorage.removeItem(user);
            }
            
        }
    },

    // 异步请求
    actions: {
        // 登录操作
        async [actions.login]({commit, dispatch}, data) {
            const res = await login(data)
            const { token, code } = res.data;
            if (code === 0) {
                commit("setToken", token);
                dispatch(actions.getUserInfo);
            }
        },
        // 获取用户信息
        async [actions.getUserInfo]({commit}) {
           const res = await sysUserInfo();
           const { code, user } = res.data;
           if (code === 0) {
               commit("setUser", user)
           }
           router.replace("/admin")
        },
        // 退出登录
        [actions.logout]({commit}) {
            commit("setToken", null);
            commit("setUser", null);
            router.replace("/login.html");
        }
    }
})
