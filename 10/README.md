# vue-cli

用webpack搭建好的一个vue开发环境 （集成环境）



## 安装 3.x 版本
```shell
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

## 安装 2.x 版本
```shell
npm install -g vue-cli
# 创建项目
vue init webpack <project-name>
```

## 检查是否安装完成

```shell
vue --version
> 3.11.0
```

## 创建项目 3.x

```shell
vue create <project-name>

# 按上下键选择预设方案
? Please pick a preset:
# 选默认
> default (babel, eslint) 
  Manually select features


# 项目创建好后
# 先进入到创建好的项目目录
$ cd my-first-vue-project 
# 启动项目
$ yarn serve 
```

## 创建的项目目录

src 开发目录
    assets          资源文件目录 （图片 css文件之类的）
    components      组件目录
    App.vue         项目的启动组件
    main.js         项目的入口文件（webpack打包的入口文件）


## 练习

1. 使用vue-cli 创建项目（任意方法都可以）
2. 把前面写的组件 改成vue的单文件组件（修改bootstrap 编写的那些组件）