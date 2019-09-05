// 入口js文件
import Vue from 'vue';
import App from './App.vue';
import test from "./plugins/test.plugin";
// 先导入iview
// import iView from 'iview';
// 再导入iview需要的css文件
// import 'iview/dist/styles/iview.css';
// import Button from "./components/Button";

// Vue的use方法用于使用插件
// Vue.use(iView);

// Vue.config.productionTip = false

// 如果要声明全局组件 必须在new vue实例之前 注册好组件
// Vue.component("Button", Button);


// Vue.use(plugin?: Function | Object, options?: object)


// 自己实现的插件注册方法
// Vue.iUse = function(plugin, options = {}) {
//     if (typeof plugin === "function") {
//         plugin(Vue, options);
//     } else if(typeof plugin === "object" && typeof plugin.install === "function") {
//         plugin.install(Vue, options);
//     }
// }

// Vue.iUse(test, {
//     name: "!11"
// })

Vue.use(test)

new Vue({
    el: "#app",
    render: h => h(App),
});


document.getElementById().style.animationDuration