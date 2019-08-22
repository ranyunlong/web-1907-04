function Test(name, age) {
    this.name = name;
    this.age = age;
}

const Input = {
    // 直接写成对象形式
    props: {
        // key 为要接收的prop名称
        // value 是js的类型
        // 如果不确定到底是什么类型 可以使用数组来约束
        a: [String, Number],
        b: Number,
        c: Boolean,
        f: Function,
        o: Object,
        d: Test,
        // 如果不想验证这个参数的类型 但是又想把它当做prop来使用 可以使用null 跳过验证
        g: null,

        // 自定义验证
        h: {
            // 固定函数名称 用来验证
            validator(value) {
                // console.error("类型错误")
                // return false;
                // 如果验证通过返回true
                // 如果验证不通过返回false
                switch(value) {
                    case 1:
                        return true;
                    case 2:
                        return true;
                    case 3:
                        return true;
                    default:
                        console.error("prop h must be 1 or 2 or 3")
                        return false;
                }
            }
        }
    },
    template: `
    <div class="input">
        {{g}}
    </div>
    `,
    watch: {
        h: {
            handler(v) {
                console.log(v)
            }
        }
    }
}


/**
 * 在编写组件时
 * 
 * 一旦你把一个html属性 设置为prop name这个属性将不会被显性的显示出来 (被当做 prop 参数来使用)
 * 当你不加时 它只是一个普通的html属性 从组件上被过渡到 组件的根元素上
 * 
 * class 属性
 * style 属性
 * 
 * 上面这两个属性呢 不能当做prop来使用
 * 它会直接显示到组件的根元素上
 * 
 * 组件上的这两个属性会直接过渡到 组件模板中的根元素上
 * 
 * 如果组件的根元素上有 class样式 组件上的class会叠加到 组件根元素上
 * 如果组件的根元素上有 style 组件上的style会叠加到   组件根元素上
 * 
 * 
 * 布尔类型的prop（属性）
 * 如果不传递 有默认值 默认为 false
 * 如果传递 不带值 只写prop 不写 value也不写等号 默认为true
 * <Input bool /> // 如果bool的类型为Boolean 默认为true
 * <Input bool /> // 如果没有使用户bool 默认为false
 */