import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function createRoute(path, name, component) {
    return {
        path,
        name,
        component: () => import('./views/' + component + '.vue')
    }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    createRoute("/", "home", "Home"),
    createRoute("/about", "about", "About"),
    createRoute("/login", "login", "Login"),
  ]
})
