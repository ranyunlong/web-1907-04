<template>
    <div class="admin">
        <div class="menu">
            <ul>
                <li>
                    <router-link to="/admin/users">用户管理</router-link>
                </li>
                <li>
                     <router-link to="/admin/roles">角色管理</router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.admin {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    .menu {
        width: 200px;
        height: inherit;
        background-color: red;
    }
    .content {
        flex: 1;
        height: inherit;
    }
}
</style>