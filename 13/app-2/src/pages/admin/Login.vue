<template>
    <div>
        <Form ref="login" :model="form" :rules="rules" v-submit="submit" autocomplete="off" :style="{width: '400px', margin: '0 auto'}">
            <FormItem
                label="账号"
                prop="username"
            >
                <Input v-model="form.username" />
            </FormItem>
            <FormItem
                label="密码"
                prop="password"
            >
                <Input v-model="form.password" type="password" />
            </FormItem>

            <FormItem
                label="验证码"
                prop="captcha"
            >
                <div class="captcha">
                    <Input v-model="form.captcha" :style="{width: '150px'}" />
                    <div class="img">
                        <Spin fix v-if="captchaLoading" />
                        <img @load="captchaLoading = false" @click="handleChangeUid" :src="captchaImgSrc" />
                    </div>
                </div>
            </FormItem>
           
            <FormItem>
                <Button html-type="submit" type="primary" long>登录</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import { baseURL } from "../../http"
    // https://www.npmjs.com/package/uuid
    import uuid from "uuid";
    // https://www.npmjs.com/package/validator
    import { sysUserInfo } from "../../api/sys/user.info.api";
    import validatorJs from "validator";
    import { login } from "../../api/login.api";
    import { mapMutations, mapState } from "vuex";
    // mapMutations(
    //     [
    //         "loginOut"
    //     ]
    // )
    export default {
        data() {
            return {
                // 表单实体数据
                form: {
                    username: "",
                    password: "",
                    captcha: "",
                    uuid: uuid()
                },
                captchaLoading: false,
                // 表单验证规则
                rules: {
                    username: [
                        {
                            // 参数必须
                            required: true,
                            // 消息
                            message: "账号必须"
                        },
                        {
                            min: 5,
                            max: 16,
                            message: "账号必须为5-16位"
                        }
                        // {
                        //     type: "email",
                        //     message: "账号格式必须为邮箱格式"
                        // },
                        // {
                        //     // min: 6, 验证长度不小于6位
                        //     // max: 10, 验证长度 不超过10位
                        //     // len: 8, 验证长度必须 8位
                        //     message: "账号长度必须6-10位"
                        // }
                    ],
                    password: [
                        {
                            // 参数必须
                            required: true,
                            // 消息
                            message: "账号必须"
                        },
                        // {
                        //     // 支持之定义验证
                        //     validator(rule, value, callback) {
                        //         // console.log(rule, value)
                        //         // console.log(value)
                        //         if (validatorJs.isMobilePhone(value, "zh-CN")) {
                        //             // console.log("是手机")
                        //             callback();
                        //         } else {
                        //             // console.log("不是手机")
                        //             // 使用callback 通知用户
                        //             callback(new Error("手机格式不正确"));
                        //         }
                        //     }
                        // }
                        // {
                        //     // 支持使用正则
                        //     pattern: /^[a-z]+$/,
                        //     message: "密码只能为小写字母"
                        // }
                        // {
                        //     type: "enum",
                        //     enum: ["a", "b", "c"],
                        //     message: "密码只能为a 或 b 或 c"
                        // }
                    ],
                    captcha: [
                        {
                            required: true, message: "验证码必须"
                        },
                        {
                            len: 5, message: "验证码长度必须5位"
                        }
                    ]
                },
                
            }
        },
        // mounted() {
        //     this.$refs['form'].$el.addEventListener("submit", (e) => {
        //         event.preventDefault();
        //     })
        // },
        methods: {
            submit(e) {
                // console.log(this.form);
                e.preventDefault();

                // console.log()

                // 使用ref  获取到表单组件对象
                // 利用表单组件里的方法来进行表单验证
                this
                    .$refs['login']
                    .validate()
                    .then(res => {
                        // 表单验证通过
                        if (res) {
                            // console.log(this.form);
                            login(this.form).then(res => {
                                // 登录成功保存token
                                localStorage.setItem("token", res.data.token);
                                this.getUserInfo();
                                this.$router.replace("/admin");
                            })
                        }
                    })


                // http
                //     .post("/users/login", this.form)
                //     .then(res => {
                //         // 请求成功
                //         console.log(res.data);
                //     })
                //     .catch(err => {
                //         console.log(err);
                //     })
            },
            handleChangeUid() {
                this.form.uuid = uuid();
                // 让验证码显示加载状态
                this.captchaLoading = true;
            },
            getUserInfo() {
                sysUserInfo().then(res => {
                    const { code, user } = res.data;
                    if (code === 0) {
                        // this.user = user;
                        // this.$store.commit("changeUser", user);
                        this.changeUser(user);
                    }
                })
            },

            // 助手函数
            // 根据传递进去的字符串 生成对应的commit 方法
            ...mapMutations([
                "changeUser"
            ])
        },
        computed: {
            captchaImgSrc() {
                return baseURL + "/captcha.jpg?uuid=" + this.form.uuid;
            }
        },
    }
</script>

<style scoped>
.captcha {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.captcha .img {
    position: relative;
}

.captcha img {
    height: 32px;
}
</style>