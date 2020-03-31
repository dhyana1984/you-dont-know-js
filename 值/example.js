//在字符串上借用数组的方法
const a = 'foo'
a.join //undefined
a.map  //undefined
const c = Array.prototype.join.call(a, '-')
const d = Array.prototype.map.call(a, t => t.toUpperCase() + '.').join('')
console.log(c) //f-o-o
console.log(d) //F.O.O

//带误差的比较两个数
function numbersCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON
}

//表达式void返回undefined
console.log(void a) //undefined