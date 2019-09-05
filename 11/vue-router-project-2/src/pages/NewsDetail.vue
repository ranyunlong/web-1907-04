<template>
    <div>
        <h1>新闻详情 {{$route.params.id}}</h1>

        <button @click="$router.back()">返回</button>
        <!-- <button @click="$router.forward()">前进</button> -->
        <!-- <router-link to="/news">去新闻页</router-link> -->

        <button @click="goDetail">到指定新闻页面</button>
    </div>
</template>

<script>
    // 在使用了vue路由的项目里
    // 在每个组件里 可以获取到当前路由的详细信息
    export default {
        created() {
            // 向后台发起ajax请求
            // 把请求到的数据 放入到组件里展示 
        },
        mounted() {
            // $route 记录当前路由信息
            console.log(this.$route);

            /**
             * $route 从当前路由中取出 对应的参数
             * 1. fullPath 当前路由的完全路径
             * 2. hash 路径中#号后面的数据
             * 3. meta 路由的元数据
             * 4. name 当前路由的名称 在配置路由的时候添加name选项就会有此参数
             * 5. params 匹配的动态路由参数
             * 6. query 查询字符串参数
             */


            // $router vue-router对象
            // console.log(this.$router);
        },
        methods: {
            goDetail() {
                // this.$router.back();
                // this.$router.forward();
                // this.$router.go(1);

                // this.$router.push("/news/1234567");
                // this.$router.push({
                //     path: "/news/1234567"
                // });

                // this.$router.replace();
            }
        }
    }
</script>

<style scoped>

</style>