import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import("../pages/Home.vue")
        },
        {
            path: "/login",
            alias: "/login.html",
            component: () => import("../pages/Login.vue")
        },
        {
            path: "/admin",
            component: () => import("../pages/admin/Index.vue"),
            children: [
               {
                    path: "login",
                    alias: "login.html",
                    component: () => import("../pages/admin/Login.vue")
               },
               {
                    path: "users",
                    alias: "users.html",
                    component: () => import("../pages/admin/Users.vue")
               },
               {
                    path: "roles",
                    alias: "roles.html",
                    component: () => import("../pages/admin/Roles.vue")
                }
            ]
        }
    ],
})