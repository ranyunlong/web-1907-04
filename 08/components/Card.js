Vue.component("Card", {
    props: {
        title: {
            type: String,
            default:"标题"
        }
    },
    data() {
        return {
            key: "123"
        }
    },
    mounted() {
        console.log(this.$slots)
        // VNode 虚拟dom 只是一个对象结构 用于做数据变更对比的 （增量更新）
        // 修改 创建原生的dom对象 （原生dom 和 浏览器的渲染引擎绑定在一块的）
        // 虚拟dom 只是模拟的dom结构 在修改数据的时候 虚拟dom 会去比较 哪个一个跟原生dom相关的数据
        // 发生了改变 当修改被检查完毕之后呢 一起修改 （避免频繁的修改dom）
    },
    template: `
    <div class="card">
        <div class="header">
            <slot name="title">{{title}}</slot>
        </div>
        <div class="content">
            <slot/>
        </div>
    </div>
    `
})

// <slot /> 默认插槽 vue自带的组件 直接取组件的$slots.default 来显示

// <slot name="" /> 具名插槽 （具有名称的插槽）

// 作用域插槽 在开发组件时 给组件的具名插槽上 绑定prop 使用组件和插槽时 可以获取到这个绑定的变量

// <slot name="title" :a="key" /> prop就是传递过去的 对象中的key 绑定的值呢 key的value