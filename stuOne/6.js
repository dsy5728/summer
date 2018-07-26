/*------------------------------ 函数作为返回值 ------------------------------ */

//函数的返回值
function sum(arr){
    return arr.reduce(function(x,y){
        return x*y;
    })
}
console.log(sum([1,2,3,4,5]));//120

//如果不需要求和，只是有需要的时候再用

function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}
var f = lazy_sum([1, 2, 3, 4, 5]);
console.log(lazy_sum([1, 2, 3, 4, 5])); //[Function: sum]
console.log(f);//[Function: sum]
console.log(f());//15

// 当lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数中，
// 这种称为“闭包（Closure）”的程序结构拥有极大的威力

var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
console.log( f1 === f2); //false

//当我们每次调用lazy_sum函数时，每次调用都会返回一个新的函数

/*-------------------------------- 闭包 ----------------------------------- */

// 注意到返回的函数在其定义内部引用了局部变量arr，所以，当一个函数返回了一个函数后，其内部的局部变量还被新函数引用，
// 所以，闭包用起来简单，实现起来可不容易。

function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1());//16
console.log(f2());//16
console.log(f3());//16

// 原因就在于返回的函数引用了变量i，但它并非立刻执行。
// 等到3个函数都返回时，它们所引用的变量i已经变成了4，因此最终结果为16。

//注意，在使用闭包时，返回函数不要引用任何的循环变量

function count1(){
    var arr = [];
    for (var i = 1;i<=3 ;i++){
        arr.push((function(n){
            return function(){
                return n*n;
            } 
        })(i));
    }
    return arr;

}
//arr.push(()(i))
var results1 = count1();
f1 = results1[0];
f2 = results1[1];
f3 = results1[2];

console.log(f1());//1
console.log(f2());//4
console.log(f3());//9

//创建一个匿名函数并且执行

console.log((function(x){return x*x})(3)); //9

//闭包还不是很了解

/*--------------------------- 箭头函数 --------------------------------- */

//箭头函数相当于匿名函数，并且简化了函数的定义

//箭头函数有两种格式---------------------------------

//第一种，只包含一个表达式，连{……}和return都省略了

x => x*x;

//第二种，包含多条语句，不能省略{……}和return

x => {
    if(x>0){
        return x*x;
    }
    if(x<0){
        return -x*x;
    }
}

//根据参数分类------------------------------------------

//两个参数

(x,y) => x*x+y*y;

//无参数

() => 3.15;

//可变参数

(x,y,...rest) =>{
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;

}

//如果返回一个对象，需要注意

x => ({foo:x})

//-------------------------------------------------

var f = v => v;



//上面的箭头函数等同于：
var f = function(v) {
return v;
};
//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
var f = () => 5;
//  等同于
var f = function () { return 5 };
var sum = (num1, num2) => num1 + num2;
//  等同于
var sum = function(num1, num2) {
return num1 + num2;
};

















/*-------------------------------- this ---------------------------------- */

//箭头函数看上去是匿名函数的一个简写，但实际上有个明显的区别
//箭头函数内部的this是词法作用域，由上下文确定

//回顾前面的例子，由于JavaScript函数对this绑定的错误处理，下面的例子无法得到预期结果：

var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};

console.log(obj.getAge());//NaN

//现在，箭头函数完全修复了 this 的指向，this总是指向词法作用域，也就是obj

var obj1 = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向window或undefined
       return fn();
    }
};
console.log(obj1.getAge());//28