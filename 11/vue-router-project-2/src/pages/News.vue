<template>
    <div>
        <h1>新闻列表页面</h1>
        
        <ul>
            <li v-for="(item, index) in list" :key="index" @click="goDetailPage(item)">
                {{item.title}}
            </li>
        </ul>
        <button @click="$router.forward()">前进</button> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        id: 1,
                        title: "香港各界呼吁聚焦经济发展 民生改善  新华时评",
                        createTime: new Date().toLocaleString(),
                    },
                    {
                        id: 2,
                        title: "关于发扬斗争精神 习近平这样告诫全党",
                        createTime: new Date().toLocaleString(),
                    },
                    {
                        id: 3,
                        title: "【中国稳健前行】“中国之治”的政治保证",
                        createTime: new Date().toLocaleString(),
                    }
                ]
            }
        },
        methods: {
            goDetailPage(item) {
                // 使用地址直接跳转
                // this.$router.push(`/news/${item.id}`);

                // 传递path 跳转
                // this.$router.push({
                //     path:`/news/${item.id}`,
                //     query: {
                //         zhangsan: "张三"
                //     }
                // })

                // 根据路由名称跳转 可以设置路径参数
                // this.$router.push({
                //     // 路由的名称
                //     name: "NewsDetailPage",
                //     // 路由的路径参数
                //     params: {
                //         id: item.id
                //     },
                //     query: {
                //         createTime: item.createTime
                //     }
                // })


                // this.$router.replace(`/news/${item.id}`)

                // 把当前记录覆盖成新页面的记录
                // 可以有效的禁止用户返回到 我们不想让他返回的页面
                this.$router.replace({
                    // 路由的名称
                    name: "NewsDetailPage",
                    // 路由的路径参数
                    params: {
                        id: item.id
                    },
                    query: {
                        createTime: item.createTime
                    }
                })


            }
        },
    }
</script>

<style scoped>

</style>