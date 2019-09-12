<template>
    <Layout class="admin">
        <Header class="header">
            <div class="logo">
                logo
            </div>
            <Dropdown v-if="user">
                <Button type="primary">
                    {{user.email}}
                    <Icon type="ios-arrow-down"></Icon>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem>修改密码</DropdownItem>
                    <DropdownItem @click.native="logout">安全退出</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Button type="primary" v-else>
                请登录
            </Button>
        </Header>
        <Layout>
            <Sider hide-trigger>
                <Menu width="auto" theme="dark">
                    <Submenu :name="menu.name" v-for="menu in menuList" :key="menu.menuId">
                        <template slot="title">
                            <Icon type="ios-paper" />
                            {{menu.name}}
                        </template>
                        <MenuItem @click.native="selectMenu(childMenu)" :name="childMenu.name" v-for="childMenu in menu.list" :key="childMenu.menuId">
                            {{childMenu.name}}
                        </MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Content class="main">
                <div class="content">
                    <!-- 
                        keep-alive
                        可以把v-if隐藏的元素缓存起来
                        路由也可以缓存
                     -->
                   <keep-alive>
                        <router-view></router-view>
                   </keep-alive>
                   
                </div>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import { sysUserInfo } from "../../api/sys/user.info.api";
    import { sysMenuNav } from "../../api/sys/menu.nav.api";
    import { mapGetters, mapActions } from "vuex";
    import actions from "../../store/actions"
   
    export default {
        created() {
            if (localStorage.getItem("token")) {
                this.getNav();
                // this.getUserInfo();
            } else {
                this.$router.push("/admin/login.html")
            }
        },
        data() {
            return {
                menuList: [],
            }
        },
        methods: {
            // 获取当前管理员的个人信息
            // getUserInfo() {
            //     sysUserInfo().then(res => {
            //         const { code, user } = res.data;
            //         if (code === 0) {
            //             // this.user = user;
            //             this.$store.commit("changeUser", user);
            //         }
            //     })
            // },
            // 获取当前用户的菜单
            ...mapActions([
                actions.logout
            ]),
            getNav() {
                sysMenuNav().then(res => {
                    const { code, menuList } = res.data;
                    if (code === 0 ){
                        this.menuList = menuList;
                        // console.log(JSON.stringify(menuList, null, 4))
                    }
                })
            },

            selectMenu(menu) {
                // console.log(menu.url);
                switch(menu.menuId) {
                    case 2:
                        this.$router.push({
                            path: "/admin/users.html",
                        })
                    break;
                    case 3:
                        this.$router.push({
                            path: "/admin/roles.html"
                        })
                    break;
                }
            },
            logout() {
                this[actions.logout]();
            }
        },
        computed: {
            ...mapGetters([
                "user"
            ])
        },
    }
</script>

<style scoped>
.admin {
    height: 100vh;
}
.header {
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.header .logo {
    width: 200px;
}

.main {
    padding: 15px;
}

.content{
    background: #fff;
    height: 100%;
    width: 100%;
}
</style>