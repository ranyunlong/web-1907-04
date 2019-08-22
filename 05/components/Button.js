Vue.component("Button", {
    props: {
        // 可以把prop 的类型改成对象
        color: {
            // type key作为类型验证
            type: String,
            // default 选项就可以作为类型验证时的默认值
            default: "default",
            // required 如果为true color这个属性就必须传递 否则报错 
            // required: true,
        },
        size: {
            validator(value) {
                switch(value) {
                    case "lg":
                        return true;
                    case "sm":
                        return true;
                    case "xs":
                        return true;
                    default:
                        return false;
                }
            }
        },
    },
    inheritAttrs: false,
    template: `
    <button
        v-bind:class="['btn', 'btn-' + color, {
            'btn-lg': size === 'lg',
            'btn-sm': size === 'sm',
            'btn-xs': size === 'xs',
        }]" 
        type="submit"
    >
        <slot/>
    </button>
    `
})