<template>
    <div class="test">
        <div class="title">
            标题
        </div>
        <div class="content">
            内容
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
@import "../styles/var";
.test {
    width: 100px;
    height: 100px;
    .border();
    .flex(column);
    .title {
        // background: @primary;
    }
    .content {
        // background-color: #fff;
        flex: 1;
    }

    &:hover {
        background: blue;
    }
}
</style>