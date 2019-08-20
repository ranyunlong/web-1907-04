Vue.component("Icon", {
    props: ["name"],
    template: `
    <i :class="['glyphicon', 'glyphicon-' + name]"></i>
    `
})