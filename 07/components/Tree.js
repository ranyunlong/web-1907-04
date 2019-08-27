Vue.component("Tree", {
    name: "my-tree",
    props: {
        arr: Array
    },
    template: `
    <ul>
        <li v-for="(item, index) in arr" @click="item.isShowChild = !item.isShowChild">
            <div>
            {{item.name}}
            <button @click.stop="add(item, index)">添加</button>
            <button @click.stop="remove(arr, item, index)">删除</button>
            </div>
            <my-tree :arr="item.children" v-if="item.isShowChild" />
        </li>
    </ul>
    `,
    methods: {
        add(item, index) {
            if (Array.isArray(item.children)) {
                item.isShowChild = true;
                item.children.push({
                    name: "aaa",
                    age: 20,
                    isShowChild: false,
                    children: []
                })
            } else {


                this.$set(item, "children", [])

                /**
                 * $set(target, key, value)
                 * 1. target 要添加的目标对象
                 * 2. key 对象的成员
                 * 3. value 对象的value
                 */

                item.isShowChild = true;
                item.children.push({
                    name: "aaa",
                    age: 20,
                    isShowChild: false,
                })
                // console.log("item.children ",item)
            }
            
        },
        remove(arr, item, index) {
            arr.splice(index, 1);
            // console.log(arr)
            // this.$emit("remove",item,index)
        },
    },
})

// 第一次运行 3次
// 递归第一轮 9次
// 递归第二轮 