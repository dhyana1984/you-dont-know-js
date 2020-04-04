const a = {
    b: 42,
    c: '42',
    d: [1, 2, 3]
}
JSON.stringify(a, ['b', 'c']) // "{"b":42,"c":"42"}" 第二个参数是数组的话放需要序列化的属性键名
JSON.stringify(a, (k, v) => {
    if (k !== "c") {
        return v
    }
})  //"{"b":42,"d":[1,2,3]}" 第二个参数是函数的话传k,v,如果不需要序列化的不返回v即可

//JSON.stringify的第三个参数是缩进

//获得当前时间戳
//const timestamp = +new Date()
const timestamp = Date().now()

//-1哨位函数返回结果操作
//~字符位非操作对每一位进行反转，操作特征，~x大致等于-(x+1)，所以~(-1) = 0，利用这个特征可以来判断返回哨位函数的结果
const p = 'Hello World'
if (p.indexOf('lo') !== -1) {
    //xxxx
}
//等同于
if (~p.indexOf('lo')) {

}

if (p.indexOf('ol') === -1) {
    //xxxx
}
//等同于
if (!~p.indexOf('ol')) {
    //...
}