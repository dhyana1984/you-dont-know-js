//检查null类型
var a = null
(!a && typeof a === "object") // true 

//function的length参数
function a(a, b) {
    //...
}
a.length //2 函数对象的length对象是其声明的参数个数