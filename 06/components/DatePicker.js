Vue.component("DatePicker", {
    props: {
        before: [String, Date],
        after: [String, Date],
    },
    data() {
        return {
            iBefore: this.formatTime(this.before),
            iAfter: this.formatTime(this.after),
            beforeError: "",
        }
    },
    watch: {
        iBefore(newValue) {
            let data = new Date(newValue);
            if (data.toDateString() === "Invalid Date") {
                this.beforeError = "日期格式有误"
            } else {
                this.beforeError = ""
                this.$emit("update:before", data)
            }
            
        },
        iAfter(newValue) {
            let data = new Date(newValue);
            if (data.toDateString() === "Invalid Date") {
                this.beforeError = "日期格式有误"
            } else {
                this.beforeError = ""
                this.$emit("update:after", data)
            }
        }
    },
    methods: {
        formatTime(data) {
            if (typeof data === "string") {
                return data;
            } else if (data instanceof Date) {
                const yyyy = data.getFullYear();
                const M = data.getMonth() + 1;
                const d = data.getDate();
                return yyyy + "/" + M + "/" + d
            }
        }
    },
    template: `
    <div>
        <input type="text" v-model="iBefore" />
        <span style="color:red">{{beforeError}}</span>
        至
        <input type="text" v-model="iAfter" />
    </div>
    `,

})