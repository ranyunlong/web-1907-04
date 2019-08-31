// // alert("1111");

// require("./styles/index.less");

// // 用于处理兼容问题
// // 解决例如ie浏览器 不支持 Promise等es6语法
require("@babel/polyfill");

// const test = require("./test");

// const p = new Promise((r, j) => {
//     r(100);
// })

// p.then(res => {
//     console.log(1);
// })

// var img = document.createElement("img");

// img.src = require("./imgs/1.jpg");


// window.addEventListener("load", () => {
//     document.body.appendChild(img);
// })


// // 在webpack里不管你是什么类型的文件 都可以被当做模块来进行管理


// 默认导入 （获取到模块里默认导出的成员 export default 导出的）
// import test from "./test";
// const test = require("./test");

// 按需导入 （获取模块里 使用export 导出的成员）
// import { cc } from "./test";


// 我既需要 默认导出的成员 也需要 按需导出的成员
// import test, { cc, abc, abd } from "./test";

// 有时候 想把一个模块中所有的导出成员都取出 但是要存在一个变量里
// 返回一个对象 默认导出的会被放在default 选项里
// import * as name from "./test";

// console.log(test, cc); 
// console.log(name)


// import { abc } from "./fn";

// 不支持模板编译模式的vue
// import Vue from "vue";

// 支持template 模板编译
import Vue from "vue/dist/vue.esm";
// import App from "./App.vue";


const App = {
    template: `
    <h1>{{title}}</h1>
    `,
    data() {
        return {
            title: "标题"
        }
    },
}

console.log(App)


new Vue({
    el: "#app",
    // render: (createElement) => {
    //     // 生成一个标签模板
    //     // return createElement("div", "哈哈")

    //     // 生成一个组件模板
    //     return createElement(App)
    // }
    // template:`
    // <div>
    //     <App />
    // </div>
    // `,
    // components: {
    //     App
    // },

    render: h => h(App)
})