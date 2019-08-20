Vue.component("InputGroup", {
    props: ["before-Text", "after", "placeholder", "type"],
    template: `
    <div class="input-group">
        <span v-if="beforeText" class="input-group-addon" id="basic-addon1">{{beforeText}}</span>
        <input :type="type" class="form-control" :placeholder="placeholder" aria-describedby="basic-addon1">
        <span v-if="after" class="input-group-addon" id="basic-addon1">{{after}}</span>
    </div>
    `
})



 /**
  * 1. 使用 烤串传值
  * 
  * prop 名称可以写成烤串 取值可以使用小驼峰
  * prop 名称可以写成小驼峰  取值可以使用小驼峰
  * prop 名称可以写成大驼峰 取值可以使用大驼峰
  * 
  * 
  * 2. 使用 小驼峰传值
  * 
  * prop 名称不可以写成大驼峰
  * prop 名称可以写成烤串 取值可以使用小驼峰
  * prop 名称可以写成小驼峰  取值可以使用小驼峰
  * 
  * 
  * 3. 使用 大驼峰传值
  * prop 名称不可以写成小驼峰
  * prop 名称不可以写成烤串
  * prop 名称可以写成大驼峰 取值可以使用大驼峰
  */

// 1. 在使用组件时 最好的传值方式是烤串
// 2. 在使用组件时 其次的方式是小驼峰
// 3. 在使用组件时 最差的方式是大驼峰


// 组件是先写好 再使用
// 使用组件者 最好是使用 烤串来传参 因为这样 不管组件的编写者使用的是任意方式来接收参数都可以接收到