<template>
<!-- html-loader来处理 保存到组件的模板选项里去 -->
    <div class="test">
        <h1>{{title}}</h1>
        <img src="./imgs/1.jpg" />
    </div>
</template>

<script>
    // 这个文件只是被vue处理成组件对象
    // template 被vue添加到了 render函数里运行
    export default {
        data() {
            return {
                title: "这是一个标题1"
            }
        },
        methods: {
            fn() {

            }
        }
    }
</script>

<style>
    /* 这里的东西由css-loader 直接处理了 */

    .test {
        background: red;
    }

</style>


