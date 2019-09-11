import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 启动vuex之前 检查本地存储里是否有缓存的user
// 配合本地存储来持久化数据
const user = localStorage.getItem("user");

// 创建一个vuex 状态管理器
export default new Vuex.Store({
    state: {
        user: user ? JSON.parse(user) : null
    },

    // 可以获取state里的任意一个数据
    getters: {
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
        loginOut(state) {
            state.user = null;
            localStorage.clear();
        }
    }
})