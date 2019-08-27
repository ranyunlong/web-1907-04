Vue.component("Avatar", {
    props: {
        shape: {
            type: String,
            default: "circle"
        },
        size: {
            type: [String, Number],
            default: "default"
        },
        src: String,
        icon: String,
    },
    mounted() {
        console.log(this)
    },
    template: `
    <span 
        :class="['avatar', {
            circle: shape === 'circle',
            square: shape === 'square',
            default: size === 'default',
            large: size === 'large',
            small: size === 'small',
        }]"
        :style="{
            width: styleSize,
            height: styleSize,
            fontSize: styleSize,
            lineHeight: styleSize
        }"
    >
        <Icon v-if="icon" :type="icon" />
        <img v-if="src" :src="src" />
        <span v-if="$slots.default" class="text">
            <slot />
        </span>
    </span>
    `,
    computed: {
        styleSize() {
            if (typeof this.size === "number") {
                return this.size + "px";
            }
        },
    },
})