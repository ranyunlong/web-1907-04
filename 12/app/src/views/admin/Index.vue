<template>
    <Layout class="admin">
        <Header class="header">
            <div class="logo">
                logo
            </div>
            <Dropdown>
                <Button type="primary">
                    {{user ? user.email : ""}}
                    <Icon type="ios-arrow-down"></Icon>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem>修改密码</DropdownItem>
                    <DropdownItem>安全退出</DropdownItem>
                </DropdownMenu>
            </Dropdown>
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
                    <router-view></router-view>
                </div>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import { sysUserInfo } from "../../api/sys/user.info.api";
    import { sysMenuNav } from "../../api/sys/menu.nav.api";
    export default {
        created() {
            this.getNav();
            this.getUserInfo();
        },
        data() {
            return {
                user: null,
                menuList: [],
            }
        },
        methods: {
            // 获取当前管理员的个人信息
            getUserInfo() {
                sysUserInfo().then(res => {
                    const { code, user } = res.data;
                    if (code === 0) {
                        this.user = user;
                    }
                })
            },
            // 获取当前用户的菜单
            getNav() {
                sysMenuNav().then(res => {
                    const { code, menuList } = res.data;
                    if (code === 0 ){
                        this.menuList = menuList;
                        console.log(JSON.stringify(menuList, null, 4))
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
            }
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