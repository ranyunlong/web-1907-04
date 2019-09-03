import Card from "./components/Card";
import Test from "./components/Test";


// export default function(Vue) {  
//     // 把vue的构造函数传递给你之后 你自己去注册组件
//     Vue.component("Card", Card)

//     // 注册指令
//     Vue.directive("focus", {
//         bind() {

//         },
//         inserted() {

//         }
//     })
    
//     // 全局混入
//     Vue.mixin({

//     })

// }

const components = {
    Test, 
    Card,
};

export default {
    // 你提供给use方法 安装的选项
    install(Vue) {
        // 自动循环注册所有的组件
        Object.keys(components).forEach(name => {
            Vue.component(name, components[name])
        })
    }
}