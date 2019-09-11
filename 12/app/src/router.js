import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function createRoute(path, name, component, meta = {}, children = []) {
    return {
        path,
        name,
        alias: path + ".html",
        component: () => import('./views/' + component + '.vue'),
        meta,
        children
    }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    createRoute("/", "home", "Home"),
    createRoute("/about", "about", "About"),
    createRoute("/login", "login", "Login"),
    createRoute("/admin", "admin", "admin/Index", { auth: true }, 
        [
            createRoute("users", "users", "admin/Users", { auth: true }),
            createRoute("roles", "roles", "admin/Roles", { auth: true })
        ]
    )
  ]
})
