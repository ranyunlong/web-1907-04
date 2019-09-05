# vue-router

根据输入的地址 切换不同的界面 （界面渲染过程 在浏览器完成的）

vue全家桶里的成员 路由模块
vue-router 是vue的一个插件
所以在使用vue-router 时需要注册插件

## 安装

1. 直接使用vue创建自定义项目

```shell
vue create vue-router-project-1
vue create vue-router-project-2
```

## 路由 

通过匹配不同的地址 切换不同的组件显示


1. 手动配置

安装vue-router模块
```shell
yarn add vue-router
# or
npm i vue-router
```


2. 必须提供一个路由内容的展示容器


```js
/**
 * $route 从当前路由中取出 对应的参数
 * 1. fullPath 当前路由的完全路径
 * 2. hash 路径中#号后面的数据
 * 3. meta 路由的元数据
 * 4. name 当前路由的名称 在配置路由的时候添加name选项就会有此参数
 * 5. params 匹配的动态路由参数
 * 6. query 查询字符串参数
 */

// this.$router.back();
// this.$router.forward();
// this.$router.go(1);

// this.$router.push("/news/1234567");
// this.$router.push({
//     path: "/news/1234567"
// });

// this.$router.replace();
```


# 练习



# 预习 axios

https://www.npmjs.com/package/axios