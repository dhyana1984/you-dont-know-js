//闭包
function foo() {
    var a = 2
    function bar() {
        console.log(a)
    }
    return bar
}

var baz = foo()
baz()  // 闭包，bar保留了对foo作用域的引用，这个引用就要闭包

//循环和闭包

//每个1秒打印6，因为setTimeout共享同一个作用域的i
for (var i = 0; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)
}

//直接用立IIFE不行，因为IIFE的作用域是空的，必须要传参数进去，每次迭代都会生成一个新的作用域
for (var i = 0; i <= 5; i++) {
    (function () {
        var j = i //必须要把i传进来，i每次变化新建一个副本
        setTimeout(function timer() {
            console.log(j)
        }, i * 1000)
    })()
}

//或者直接把i当参数传进去
for (var i = 0; i <= 5; i++) {
    (function (j) { //直接传参数进来
        setTimeout(function timer() {
            console.log(j)
        }, i * 1000)
    })(i) //将i传进去
}

//直接使用let最方便
for (let i = 0; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)
}