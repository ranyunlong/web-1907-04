<template>
    <div>
        <h1>很抱歉，您要访问的页面不存在！</h1>
        <p>倒计时 {{index}} 秒后返回之前的页面</p>
    </div>
</template>

<script>   
    export default {
        mounted() {
            this.timer = setInterval(() => {
                this.index--;
            }, 1000)
        },
        data() {
            return {
                index: 5,
                timer: null,
            }
        },
        watch: {
            index(v) {
                if (v <= 0) {
                    clearInterval(this.timer);
                    // 返回前一个页面
                    this.$router.back();
                }
            }
        },
    }
</script>

<style lang="less" scoped>

</style>