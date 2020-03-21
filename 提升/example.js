a = 2 
var a           //编译时被处理
console.log(a)  //2
//实际处理顺序
var a 
a = 2 
console.log(a)


console(b)  //undefined
var b = 2   //实际会被JS引擎编程两个步骤，在编译时处理var a，在运行时处理a = 2 
//实际处理顺序
var b
console(b)
b=2

//函数声明会被提升，函数表达式不会被提升
foo() //报错, TypeError，因为只声明了foo，并没有赋值
bar() //RefferenceError
var foo = function bar() {
    //。。。
}