//循环标签，配合continue和break使用
foo: for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if(i===j){
            continue foo
        }
        if(i>j){
            break foo
        }
    }
}



//[]+{}和{}+[]

//{}出现在+运算符表达式中，因此它被当做一个值来处理（空对象）来处理，所以{}会被强制转换为"[Object Object]"
//而[]被转换为""
//所以结果是"[Object Object]"
[]+{} //"[Object Object]"

//{}被当做一个独立的代码块，没有任何操作
//+[]将[]显示强制转换为0，所以结果是0
{}+[] //0