import Vue from "vue";
import VueRouter from "vue-router";

// import HomePage from "../pages/Home";
// import AboutPage from "../pages/About";
// import NewsPage from "../pages/News";
// import NewsDetailPage from "../pages/NewsDetail";

// 1. 注册vue-router
Vue.use(VueRouter);

// 创建好一个路由 等待被使用（放进vue实例中使用）
// export default new VueRouter({
//     // 路由模式
//     // 1. hash 兼容老浏览器的模式
//     // 2. history 使用浏览器历史记录来管理路由
//     mode: "history",
//     // 路由列表 数组
//     routes: [
//         // 每一个对象是一个路由的配置
//         {
//             // 添加路由的路径
//             path: "/",
//             // 组件 vue发现组件是一个函数时 它不会首先把这个组件的js内容加载出来
//             // 而是等待路由被匹配的时候取加载这个组件的js模块
//             // 懒加载页面 lazy-component
//             component: () => import("../pages/Home.vue"),
//         },
//         {
//             // 添加路由的路径
//             path: "/about",
//             // 组件
//             component: () => import("../pages/About.vue"),
//         },
//         {
//             // 添加路由的路径
//             path: "/news",
//             // 组件
//             component: () => import("../pages/News.vue"),
//         },
//         {
//             path: "/news/:id",
//             component:() => import("../pages/NewsDetail.vue"),
//             // 给当前路由添加个名称 
//             name: "NewsDetailPage",
//             // 给当前路由添加一些元数据
//             meta: {
//                 a: true,
//                 b: false,
//                 c: 100,
//                 needAuth: true,
//             }
//         }
//     ]
// });


const authMeta = {
    // 需要验证
    authLogin: true,
}

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import("../pages/Home.vue"),
        },
        {
            path: "/admin",
            meta: {
                ...authMeta
            },
            component: () => import("../admins/Home.vue"),
            // 重定向 当访问的路径匹配上admin时 切换到子路由 users上
            // redirect: "/admin/users",
            // 如果当前路由包含嵌套的子路由
            // 必须当前路由的组件模板中 添加一个子路由的 路由容器
            children: [
                // 如果path为空 或者 为/
                // 这个嵌套子路由会作为 /admin路由的默认子路由
                {
                    path: "",
                    alias: "index.html",
                    meta: {
                        ...authMeta
                    },
                    component: () => import("../admins/Welcome.vue"),
                },
                {
                    path: "users",
                    alias: "users.html",
                    meta: {
                        ...authMeta
                    },
                    component: () => import("../admins/Users.vue"),
                },
                {
                    path: "roles",
                    alias: "roles.html",
                    meta: {
                        ...authMeta
                    },
                    component: () => import("../admins/Roles.vue"),
                },
                {
                    path: "login",
                    alias: "login.html",
                    component: () => import("../admins/Login.vue"),
                },
                {
                    path: "404",
                    alias: "404.html",
                    component: () => import("../admins/NotFound.vue"),
                },
                {
                    // 前面匹配不到的 我都匹配
                    // 匹配所有路由
                    path: "*",
                    redirect: "/admin/404.html"
                }
            ]
        },
    ]
})