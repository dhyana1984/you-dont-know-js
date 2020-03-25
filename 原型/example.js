//隐式屏蔽
var anotherObject = {
    a: 2
}

var myObject = Object.create(anotherObject)
myObject.a++ //隐式遮蔽，相当于myObject.a= myObject+1
console.log(anotherObject.a) //2
console.log(myObject.a) //3

console.log(myObject.hasOwnProerty('a')) //true

//原型链
function Foo() {
    
}
function Bar() {
    
}


//错误，并不会创建一个关联到Bar.prototype的新对象，直接引用了Foo.prototype
Bar.prototype = Foo.prototype
//基本满足，但是使用了Foo的构造函数调用，如果Foo有一些副作用会影响Bar()的后代
Bar.prototype = new Foo()
//正确
Bar.prototype = Object.create(Foo.prototype)
//ES6之后
Object.setPrototypeOf(Bar.prototype, Foo.prototype)
