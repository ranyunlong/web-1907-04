Vue.component("Icon", {
    props: {
        type: String,
        size: {
            type: Number,
            default: 16
        },
        color: String
    },
    template: `
    <i
        :class="['iconfont', iconName]"
        :style="{
            fontSize,
            color
        }"
    />
    `,
    computed: {
        iconName() {
            if (this.type) {
                return "icon-" + this.type;
            } else {
                return "";
            }
        },
        fontSize() {
            return this.size + "px";
        }
    },
})