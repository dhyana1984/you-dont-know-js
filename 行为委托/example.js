//关联风格
Foo={
    init : function (who) {
        this.me = who
    },
    identiy: function () {
        return "I am a " + this.me
    }
}
Bar = Object.create(Foo)
Bar.speak = function () {
    console.log("Hello, "+ this.identiy())
}

var b1 = Object.create(Bar)
var b2 = Object.create(Bar)
b1.init("b1")
b2.init("b2")

b1.speak()
b2.speak()
