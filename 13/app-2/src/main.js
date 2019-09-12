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


// const p = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     // resolve(100)
//     //     // 请求失败了
    
//     // }, 1000)

//     // $.ajax({
//     //     success(res) {
//     //         resolve(res)
//     //     },
//     //     error(err) {
//     //         reject(err)
//     //     }
//     // })
//     if (0 < 1) {
//         resolve(1);
//     } else {
//         reject({msg: "数据获取失败"})
//     }
// })


// p.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err)
// })

// const p1 = new Promise((r) => {
//     setTimeout(function() {
//         r(1)
//     }, 2000)
// })

// const p2 = new Promise((r) => {
//     setTimeout(function() {
//         r(2)
//     }, 1000)
// })

// 同时运行多个 promise 同步收到结果
// Promise.all([
//     p1,
//     p2
// ]).then(res => {
//     console.log(res)
// })


// 比赛两个异步 看谁返回的速度快 取返回速度快的结果
// Promise.race([p1, p2]).then(res=> {
//     console.log(res)
// })

// async 异步函数
// async return的值是一个promise对象
// await 只能用在async函数里 否则报错
// async function test() {
//     // await 用于把promise对象的then里的值求出来
//     // 把promise的异步 变成同步
//     // 同步的作用域只在当前的 async 函数里
//     // 在promise前面加了await之后 就会等到promise then 或者catch 执行后才会继续执行
//     // 否则一直等待
//     const res = await p1;
//     console.log(res);
// }

// console.log("aa")
// // async外部的执行顺序是异步的
// test()

console.log("bb")
