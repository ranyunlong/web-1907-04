import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

import iview from "iview";
import "iview/dist/styles/iview.css";


Vue.directive("submit", {
    bind(el, binding) {
        // console.log(el, binding)
        if (el instanceof HTMLFormElement && typeof binding.value === "function") {
            el.addEventListener("submit", binding.value)
        }
    }
})


Vue.use(iview);

// Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
