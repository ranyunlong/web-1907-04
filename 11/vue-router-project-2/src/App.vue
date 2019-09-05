<template>
  <div id="app">
    <!-- 
        vue-router 
        全局组件 <router-view />
        全局组件 <router-link />
        
        用于显示路由内容的容器
    -->

    <!-- <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/news">新闻</router-link> -->

    <!-- <a href="/#/"></a>
    <a href="/#/about">关于</a>
    <a href="/#/news">新闻</a> -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
body {
    margin: 0;
}
#app {
    width: 100vw;
    height: 100vh;
}
</style>
