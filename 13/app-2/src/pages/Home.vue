<template>
    <div>
        <h1 ref="test">首页</h1>
        <div ref="div"></div>
        <Button ref="btn">按钮</Button>
        <Button ref="btn">按钮</Button>
        {{$store.getters.user}}
    </div>
</template>

<script>
    export default {
        created() {
            // console.log(this.$store)
        },
        mounted() {
            console.log(this.$refs)
        },
        methods: {
            
        },
    }
</script>

<style lang="scss" scoped>

</style>