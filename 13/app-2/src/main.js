import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import iview from "iview";
import "iview/dist/styles/iview.css";

Vue.use(iview);

Vue.config.productionTip = false


Vue.directive("submit", {
    bind(el, binding) {
        // console.log(el, binding)
        if (el instanceof HTMLFormElement && typeof binding.value === "function") {
            el.addEventListener("submit", binding.value)
        }
    }
})


new Vue({
    router,
    store,
    render: h => h(App),
    el: "#app"
});
