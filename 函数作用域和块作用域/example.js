//IIFE 立即执行函数
(function foo() {
    //...
})()

//

function process(data) {
    //处理数据
}

//在这个代码块中定义的内容可以销毁
{
    let someReallyBigData = {
        //... 
    }
    process(someReallyBigData)
}

var btn = document.getElementById("My_button")
btn.addEventListener('click', function click(evt) {
    //...
})
