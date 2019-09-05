<template>
    <div>
        <input type="text" />
        <input type="password" />
        <button @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        methods: {
            login() {
                localStorage.setItem("logined", 1);
                // 替换当前记录
                // 跳转到管理页面
                this.$router.replace({
                    path: "/admin"
                })
            }
        },
    }
</script>

<style lang="less" scoped>

</style>