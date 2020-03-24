function foo(num) {
    console.log("foo:" + num)
    //记录foo的调用次数
    //当前调用方式下，this确实指向foo
    this.count++
}

foo.count = 0

for (let i = 0; i < 10; i++) {
    if (i > 5) {
        //使用call函数可以确保this指向函数对象foo本身
        foo.call(foo, i)
    }
}

console.log(foo.count) //4