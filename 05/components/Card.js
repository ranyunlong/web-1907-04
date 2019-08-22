/**
 * 所有组件都全局注册 就会造成命名 不够使用
 * 
 * 局部组件
 * 
 * 只在使用的地方注册
 * 局部组件就是一个组件的选项（未生成组件实例的组件对象）
 */

 const Card = {
     template: `
     <div class="card">
        <slot />
     </div>
     `,
     data() {
         return {
             title: "标题"
         }
     },
     methods: {
         
     },
 }