Vue.component("Button", {
    // 使用数组的方式来接收参数
    // 要接收参数就在数组里添加 组件上的属性名称即可
    props: ["color"],
    data() {
        return {
            title: "xx"
        }
    },
    template: `
    <button 
        v-bind:class="['btn', 'btn-' + color]" 
        type="submit"
    >
        <slot/>
    </button>
    `
})