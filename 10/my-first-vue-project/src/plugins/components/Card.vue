<template>
    <div class="card">
        <slot/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* scoped 是给css添加作用域的 会给这个组件生成一个唯一的属性 */
.card {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
}
</style>