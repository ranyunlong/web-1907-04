Vue.component("Table", {
    props: {
        striped: Boolean,
        bordered: Boolean,
        columns: {
            // 类型数组
            type: Array,
            // 必传
            required: true,
        },
        data: {
            // 类型数组
            type: Array,
            // 必传
            // 设置默认值 因为有可能表体的数据需要等ajax请求过来之后再显示
            default: [],
        }
    },
    inheritAttrs: false,
    template: `
    <table 
        :class="['table', {
            'table-striped': striped,
            'table-bordered':bordered
        }]"
    >
        <thead>
            <tr>
                <th v-for="item in columns">{{item.title}}</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data">
                <td v-for="col in columns">
                {{item[col.key]}}
                </td>
                <td>
                    <button @click="handleClick(item, index)">删除</button>
                </td>
            </tr>
            
        </tbody>
    </table>
    `,
    methods: {
        handleClick(item, index) {
            // console.log(item, index)
            // console.log(this.$listeners);

            //使用$emit 去触发组件上绑定的事件（$listeners里注册好的 @事件名="处理函数来注册的"）
            // console.log()
            // delete this.$listeners.click
            // this.$listeners.click("xxx")

            // this.$emit("aa")
            // this.$listeners.click()

            // console.log(this.$listeners)

            // this.$emit("aa", item, index)

            // this.$listeners.aa(item, index)

            // this.$emit("click", item, index, 1)
            // this.$listeners.click(item, index, 1)

            // this.$$emit = function(type, ...args) {
            //     // if (this.$listeners[type])

            //     if (typeof this.$listeners[type] === "function") {
            //         this.$listeners[type](...args);
            //     }
            // }

            // this.$$emit("click", "!", "@", "3")
        }
    },
})

{/* <Button size="xs" @click="handleClick(item, col, index)" color="danger">删除</Button> */}

/**
 * 组件 会默认把组件上所使用的 自定义的或原生的 属性过渡到 组件的模板跟元素上
 * 如果你不想这样 使用 inheritAttrs: false 组件的根元素上不会继承 组件上所使用的属性
 * 这个操作不影响组件捕获prop
 */