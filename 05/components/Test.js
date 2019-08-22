Vue.component("TestA", {
    props: {
        value: Object,
    },
    data() {
        return {
            iObject: JSON.parse(JSON.stringify(this.value))
        }
    },
    template: `
    <div>
        {{value}}

        <button @click="run">test-a-button</button>
    </div>
    `,
    methods: {
        run() {
            // console.log(this.obj);

            // 修改子成员没有问题
            // this.obj.name = "123"

            // 组件传递过来的prop 是不能直接修改的（是只读的）
            // 只读只能使用 不建议修改
            // this.obj = {};
            // this.iObject.name = "123"

            // this.$emit("model", this.iObject)

            console.log(this.$listeners)

            // this.$listeners.input({name: "xx"})
            this.$emit("input", {name: "Xx"})
        }
    },
})