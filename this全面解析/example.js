//默认绑定
function foo() {
    console.log(this.a)
}
var a = 2
//直接调用foo(), this.a绑定到调用位置，也就是全局作用域
foo() //2

//隐式绑定
function foo() {
    console.log(this.a)
}
var obj = {
    a: 2,
    //函数被调用时obj对象拥有或者包含函数引用
    foo
}

obj.foo() //2

//显示绑定
function foo() {
    console.log(this.a)
}

var obj = {
    a:2
}

foo.call(obj) //2

//new绑定
function foo(a) {
    this.a = a
}

 var bar = new foo(2)
 console.log(bar.a) //2