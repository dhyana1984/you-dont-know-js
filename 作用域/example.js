function foo(a) {
    console.log(a) //这里也是RHS引用
}
//调用foo是一个RHS引用
foo(2) //这里有个隐式的LHS查询，将2隐式赋给a