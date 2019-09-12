<template>
    <div class="page">
        <div class="top">
            <Form v-submit="search">
                <Input v-model="searchText" class="search" />
                <Button html-type="submit" type="default">查询</Button>
                <Button type="primary">新增</Button>
                <Button type="error">批量删除</Button>
            </Form>
            
        </div>

        <Table class="table" stripe border :columns="columns" :data="list" />
        <div class="pager">
            <Page :current.sync="query.page" :total="totalCount" />
        </div>
    </div>
</template>

<script>
    import { sysUserList } from "../../api/sys/user.api";
    export default {
        data() {
            return {
                columns: [
                    {
                        type: "selection",
                        width: 50
                    },
                    {
                        title: "ID",
                        align: "center",
                        key: "userId",
                    },
                    {
                        title: "用户名",
                        align: "center",
                        key: "username",
                    },
                    {
                        title: "邮箱",
                        align: "center",
                        key: "email",
                    },
                    {
                        title: "手机号",
                        align: "center",
                        key: "mobile",
                    },
                    {
                        title: "状态",
                        align: "center",
                        key: "status",
                    },
                    {
                        title: "创建时间",
                        align: "center",
                        key: "createTime",
                    },
                    {
                        title: "操作",
                        align: "center",
                        render: (h, params) => {
                            return h("div", [
                                h("Button", {
                                    props: {
                                        size: "small",
                                        type: "text"
                                    },
                                    on: {
                                        click() {
                                            console.log(params);
                                        }
                                    }
                                }, "修改"),
                                h("Button",{
                                    props: {
                                        size: "small",
                                         type: "text"
                                    }
                                }, "删除")
                            ])
                        }
                    }
                ],
                // 查询条件
                query: {
                    page: 1,
                    limit: 10,
                    sidx: "userId",
                    order: "asc",
                    username: "",
                },
                // 数据篱笆
                list: [],
                // 总条数
                totalCount: 0,
                searchText: "",
            }
        },
        created() {
            this.getList();
        },
        activated() {
            // 缓存的页面路由进入时触发
            // console.log("缓存页面重新进入了")
            // 可以使用 activated 声明周期来判断是否重新进入了
            this.getList();
        },
        watch: {
            query: {
                handler(value) {
                    // console.log("query is change", value)
                    this.getList();
                },
                deep: true,
            }
        },
        methods: {
            async getList() {
                const res = await sysUserList(this.query);
                const { code, page } = res.data;
                if (code === 0) {
                    // console.log(res.data);
                    const { currPage, pageSize, totalCount, totalPage, list } = page;
                    this.list = list;
                    this.totalCount = totalCount;
                }
            },
            search() {
                event.preventDefault();
                // console.log(this.searchText)
                this.query.username = this.searchText;
            }
        },
    }
</script>

<style scoped>
.page {
    padding: 15px;
}
.top .search {
    width: 200px;
}

.top button {
    margin-left: 10px;
}

.table {
    margin-top: 20px;
}

.pager {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
}

</style>