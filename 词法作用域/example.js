//欺骗词法
function foo(str, a) {外
    eval(str) //欺骗，遮蔽了部的b
    console.log(a,b)
}

var b =2
foo("var b = 3", 1) //1, 3