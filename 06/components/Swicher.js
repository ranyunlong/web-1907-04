Vue.component("test", {
    template: "<i></i>",
    mounted() {
        // 每一个组件$root 都是指向的实例
        console.log(this)
        // this.run()
    },

    // 注入父组件里 provide （提供的服务）
    inject: ["title", "run"],
})

Vue.component("Switcher", {
    props: {
        size: {
            type: String,
            default: "default"
        },
        value: Boolean
    },
    data() {
        return {
            iValue: this.value
        }
    },
    watch: {
        value(newValue) {
            // console.log('value发生改变了', newValue)
            // 如果要和父组件传递过来的参数同步 在这里需要赋值给当前data
            this.iValue = newValue;
        },
        iValue(newValue) {
            // console.log('iValue发生改变了', newValue)
            // 如果要实现父子双向绑定 需要在这里用通知父组件
            this.$emit("input", newValue);
        }
    },
    template: `
    <div @click="iValue=!iValue" :class="['switch', {
        'switch-large': size === 'large',
        'switch-small': size === 'small',
        'switch-default': size === 'default',
        'switch-on': iValue
    }]">
        <span ref="span" class="switch-btn"></span>
        <test ref="aa"></test>
    </div>
    `,
    // 声明周期钩子（函数）编写不分先后顺序
    // beforeCreate 在组件创建之前调用
    beforeCreate() {
        // console.log(this.iValue);
        // 组件创建之前 无法获取到data选项数据
        // 要等到创建阶段才会初始化 才开始注入的数据 以及 创建响应式的拦截器
        console.log("开始创建一个新的组件")
        // 初始化数据

        // 可以关闭掉组件上监听的事件
        // this.$off("input")
    },
    // created 在组件创建之后调用
    created() {
        // 可以获取到响应式数据 
        console.log(this.iValue);
        // 在这里模板还没有开始渲染 生成 无法获取到真实dom元素
        console.log(this.$el); // undefined 无法获取
        console.log("新的组件创建好了")
        // 可以用来ajax 请求数据
    },

    // beforeMount 元素被挂载（插入）到dom之前 调用
    beforeMount() {
        // 这里的模板还没有被插入到dom中去 只是刚创建而已
        console.log(this.$el); // undefined 无法获取
        // 用于获取在dom创建之前的一些数据 获取dom元素的位置信息
        console.log("新的组件要开始插入到dom啦")
    },

    // mounted 组件已经被挂载（插入）到dom
    mounted() {
        // 已经挂载好了
        // console.log(this.$el); // 可以获取已经创建好的dom 元素了
        // console.log("新的组件已经插入到dom啦")

        // $el 获取组件的真实dom元素
        this.$el
        // $attrs 获取除了prop 以外的属性
        this.$attrs

        // $children 数组 获取当前组件里面使用的其他组件
        this.$children

        // $listeners 获取当前组件上所监听的自定义事件
        this.$listeners

        // $options 获取组件的选项 获取传递的参数
        this.$options

        // $parent 用来获取当前组件所使用的位置 在哪个组件里使用的
        this.$parent //返回一个组件或者实例对象

        // 可以修改父（实例）组件里的成员
        // this.$parent.value = true

        // $root 获取到实例的对象
        this.$root


        // $slots 获取组件开始标签和 结束标签里的内容
        this.$slots

        // $on(eventName, evenHandler) 组件内部监听事件
        // 1. eventName 事件名称
        // 2. evenHandler 事件处理函数
        this.$on

        this.$on("xx", () => {
            console.log(1)
        } )

        // 一次性事件
        this.$once

        // 触发的方式还是使用$emit来触发
        // $emit 触发事件
        this.$emit

        
        // $off(eventName, eventHanler) 关闭事件
        this.$off

        // var index = 0;

        // setInterval(() => {
        //     this.$emit("xx")
        //     index++;
        //     if(index > 5) {
        //         // 关闭事件
        //         this.$off("xx")
        //     }
        // }, 1000);

        // $refs 获取被ref 标记的 元素 或 组件
        // 如果是元素元素 会获取到原生元素对象
        // 如果是组件获取到的是组件对象
        // 如果被标记的元素使用v-for 获取到的是一个数组（标签或元素）
        
        // this.$on("xx", () => {
        //     console.log("运行事件")
        // })
        // console.log(this.$listeners)
        // this.$emit("xx")
    },

    // beforeUpdate 声明周期循环 （如果组件不销毁 就会在这里循环 数据发生改变时循环）
    beforeUpdate() {
        // 必须是跟模板进行绑定的数据发生改变时 才会触发
        // 当视图发生改变时 调用该回调
        console.log("当前有数据正在发生改变")
    },
    // update 声明周期循环 数据更新之后 （如果组件不销毁 就会在这里循环 数据发生改变时循环） 
    updated() {
        console.log("数据已经更新完成了")
    },

    // beforeDestroy 组件在销毁之前调用
    beforeDestroy() {
        console.log("组件销毁前")
    },

    // destroyed 组件在销毁后调用
    destroyed() {
        console.log("组件销毁后")
    },
    // 提供者 提供服务
    provide() {
        return {
            title: "xxx",
            run() {
                alert(1);
            }
        }
    }

})