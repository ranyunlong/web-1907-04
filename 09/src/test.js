// 按需导出
export function test() {
    alert("test");
}

// 按需导出
export function run() {
    // alert("run");
    const a = () => {
        return {};
    }
}

export const cc = 100;
// nodejs 模块的默认导出
// module.exports = {
//     test,
//     run
// };

// 把fn.js里的方法abc 在当前模块里导出
export { abc } from "./fn";

// 默认导出
export default {
    a: 100,
    b: 200,
    c: 300,
    run,
}