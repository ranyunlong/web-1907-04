import Vue from 'vue'
import App from './App.vue'

// 导入生成好的路由对象
import router from "./router"

Vue.config.productionTip = false


// 在localStorage里保存登录状态


// 前置守卫
// 进入路由之前的守卫
router.beforeEach((to, from, next) => {
    /**
     * 1. to 要进入到的路由 就是组件中的$route对象
     * 2. from 你刚从哪个路由来
     * 3. next 函数 放行
     */

    // 业务逻辑 
    
    if (to.meta.authLogin) {
        // 需要验证的地方我再去做验证
        // 如果本地存储里有登录状态 放行

        if (localStorage.getItem("logined")) {
            next()
        } else {
            next({
                path: "/admin/login.html"
            })
        }
    } else {
        next();
    }
});



// 后置守卫
// 进入路由后的守卫
// router.afterEach((to, form, next) => {

// });


/**
 * 验证登录的流程
 * 
 * 1. 检查哪些路由是否需要验证登录
 * 2. 通过本地存储里保存的登录状态来判断是否已登录
 * 3. 如果登录 放行
 * 4. 如果未登录 跳转至登录页面
 * 
 * 
 * 登录页面的逻辑
 * 1. 登录 保存登录状态至 本地存储
 * 2. 跳转到管理页面
 * 
 */


new Vue({
    // 路由注册到实例中
    router,
    // 在实例的模板中添加路由容器
    render: h => h(App),
}).$mount('#app')
