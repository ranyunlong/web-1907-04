import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 1,
    user: {},
  },
  getters: {
    num(state) {
        return state.num;
    }
  },
  mutations: {
    changeNumber(state, arg) {
        state.num = arg;
    },
    changeUser(state, user) {
        state.user = user;
    }
  },
  actions: {
      // 针对异步做了优化
    CHANGE_NUM({ commit, dispatch }, arg) {
        // 处理登录操作
        setTimeout(function() {
            commit("changeNumber", arg)
        }, 1000)
        
        // 处理用户信息
        dispatch("CHANGE_AGE");
        // console.log("正在触发 action CHANGE_NUM",store)
    },
    CHANGE_AGE({ commit }) {
        console.log("CHANGE_AGE 被 CHANGE_NUM 触发了")
        commit("changeUser", {})
    }
  }
})
