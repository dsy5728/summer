 // 函数 

/*---------------------- 1 - 函数的定义和调用 -----------------------------------*/
//第一种
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
// 上述abs()函数的定义如下：

//     function指出这是一个函数定义；
//     abs是函数的名称；
//     (x)括号内列出函数的参数，多个参数以,分隔；
//     { ... }之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句。

//第二种
var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

//调用函数
console.log(abs(-9));//9
console.log(abs(9));//9

//由于js中允许传入任意个参数而不受影响，所以传入的参数比定义的参数多也不会报错
console.log(abs(10,'a'));//10
console.log(abs(-10,'a'));//10

//传入的参数比定义的参数少也不会报错
console.log(abs());//NaN

//js中有一个关键字 arguments  它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数
//argument 类似Array，但它不是一个Array

//利用arguments，你可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值：

function abs1() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

abs1(); // 0
abs1(10); // 10
abs1(-9); // 9

//实际上arguments最常用于判断传入参数的个数。你可能会看到这样的写法：

// foo(a[, b], c)
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    // ...
}

//rest 参数
// function foo(a, b) {
//     var i, rest = [];
//     if (arguments.length > 2) {
//         for (i = 2; i<arguments.length; i++) {
//             rest.push(arguments[i]);
//         }
//     }
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }


function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}
console.log(foo(1, 2, 3, 4, 5));

// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]
console.log(foo(1));

// 结果:
// a = 1
// b = undefined
// Array []

console.log(foo(1,4));

// a = 1
// b = 4
// Array []
//例子                  a,b, ...rest  是公式
function example(a, b, ...rest){
    console.log('a =' + a);
    console.log('b =' + b);
    console.log(rest);

}

console.log(foo(1,2,3,4,5,6,7,8,9));
//结果：
//a = 1
//b = 2
//Array [ 3,4,5,6,7,8,9 ]

//请用rest参数编写一个sum()函数，接收任意个参数并返回它们的和：
function sum(...rest){
    let num = 0;
    for( let x of rest){
        num = num + x;
    } 
    return num;

}
 
 var i, args = [];
for (i=1; i<=100; i++) {
    args.push(i);
}
if (sum() !== 0) {
    console.log('测试失败: sum() = ' + sum());
} else if (sum(1) !== 1) {
    console.log('测试失败: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
    console.log('测试失败: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
    console.log('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
    console.log('测试通过!');
}

//return 语句
//js 引擎在行末自动添加分号

function b1(){
    return {name : 'abs'}; //{ name: 'abs' }
}
console.log(b1());


function b2(){
    return 
    {name : 'abs'};   //undefined
}
console.log(b2());

//所以正确的多行写法是

function b3(){
    return{ 
    name : 'abs'       //{ name: 'abs' }
    };   
}
console.log(b3())





/*------------------------ 2 - 变量作用域与解构赋值 ------------------------------*/

//如果一个变量在函数体内部申明，则该变量的作用域为整个函数体，
//在函数体外不可引用该变量：

function c1(){
    let x = 10;
    x = x + 1;
}
//let y = x + 1;//x is not defined
//console.log(y);//这说明无法在函数体的外面引用函数体里的变量

//同一个变量可以在两个不同的函数中单独使用，说明函数与函数之间是独立的
function c2(x){
     x = 10;
    x = x + 1;
    return x;
}

function c3(x){
     x = 10;
    x = x + 1;
    return x;
}

console.log(c3(2));//11
console.log(c2(2));//11  

//内部函数可以访问外部函数定义的变量，但是外部的不可以访问内部的
function c4(){
    var x = 1;
    function c5(){
        var y = x + 1; //y是 x+1 ,为2
    }
 //   var z = y + 1;  //y is not defined
    
}
console.log(c4())

//如果外部函数和内部函数的变量重合，那会怎么样呢：
function c5() {
    var x = 1;
    function c6() {
        var x = 'A';
        console.log('x in c6() = ' + x); // x in c6() = A
    }
    //内部可以访问外部的变量，当自身变量重合时，内部函数的变量也可以屏蔽外部函数的变量

    console.log('x in c5() = ' + x); // x in c5() = 1
    c6();
}

c5();

//变量提升  js函数定义有个特点，他会先扫描函数体的语句，把所有申明的变量提升到函数顶部

function d1(){
    var x = 'hello,' + y ;
    console.log(x);
    var y = 'world';
}
d1(); //hello,undefined

// function d1(){
//     let x = 'hello,' + y ;
//     console.log(x);
//     let y = 'world';
// }
// d1();

//用let声明会报错

//不管了，严格遵守所有的变量声明都放在函数的顶部

//实际上，JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性：
// 'use strict'
// var course = 'a';
// debugger;
// alert(course);
// alert(window.course);

//名字空间
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};

//局部作用域

function foo1() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
    console.log(i);

}
foo1();


function foo2() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    // SyntaxError:
     i += 1;
    console.log(i);
}
foo2();

//常量
//var和 let声明的都是变量，所以在ES6之前，声明常量的方法通常是用大写字母，来表示这是一个常量你们不要
//去改变他

var PI = 3.1415926535;

//ES6标准引入了新的关键字 const，来定义常量，const和let都具有块级作用域
const Pi = 3.14;
//Pi = 3;            //报错
console.log(Pi);


//解构赋值\
//数组
let [ x, y, z] = ['a','b','c'];
console.log('x = ' + x + ', y = ' + y + ', z = ' + z);
//x = a, y = b, z = c
let [x1, [y1, z1]] = ['hello', ['JavaScript', 'ES6']];
x1; // 'hello'
y1; // 'JavaScript'
z1; // 'ES6'
console.log(Array(30).fill('-').join(''));

//解构赋值还可以忽略一些值
let [, , z2] = ['happy','sad','boring'];
console.log(z2);//boring


//如果从一个对象中去除若干属性，也可以使用解构赋值
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
console.log(person.name);
var {name, age, passport} = person;
// name, age, passport分别被赋值为对应属性:
console.log('name = ' + name + ', age = ' + age +
             ', passport = ' + passport);

// name = 小明, age = 20, passport = G-12345678
let me = {
    name: 'dsy',
    age: 18,
    school:'JXNU',
    tel:18379456593,
    adress:{
        city:'lean',
        zipcode:'344300'
    }


}
var {name,adress:{city,code}} = me;
console.log(name);//dsy
console.log(city);//lean
// console.log(zip); //zip is not defined
var { age, tel:id} = me ;
console.log(age);//18
console.log(id);//18379456593
// console.log(tle);    //is not defined

//为什么支部只能用var呢？奇奇怪怪的

//解构赋值，还可以通过使用默认值来避免不存在的熟悉
// 1 - var {name ,book = 'true'} = me;
var {name ,book = 'happy'} = me;
console.log(name);
// 1 - console.log(book);     //true
console.log(book);            //happy

// // 声明变量:
// var x, y;
// // 解构赋值:
// {x, y} = { name: '小明', x: 100, y: 200};
// // 语法错误


var {f1,f2} = { name: 'dsy', f1: 100 ,f2: 200};
console.log({f1,f2});



({x, y} = { name: '小明', x: 100, y: 200});

//使用场景
function buildDate({year, month, day, hour=0, minute=0, second=0}) {
return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}

console.log(buildDate({ year: 2017, month: 1, day: 1 }));
//2016-12-31T16:00:00.000Z
console.log(buildDate({ year: 2017, month: 1, day: 1, hour: 20, minute: 15 }));
//2017-01-01T12:15:00.000Z

/*------------------------ 3 - 方法 --------------------------------------------*/

let my = {
    name: 'dsy',
    age: 18,
    school:'JXNU',
    tel:18379456593,
    adress:{
        city:'lean',
        zipcode:'344300'
    }


}

//    ---this ----------------------------------------------------

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
console.log(xiaoming.age);// function xiaoming.age() [Function: age]
console.log(xiaoming.age());// 28
var fn = xiaoming.age;
console.log(fn());
 // Uncaught TypeError: Cannot read property 'birth' of undefined

// 在一个方法内部，this是一个特殊变量，它始终指向当前对象，也就是xiaoming这个变量。
// 所以，this.birth可以拿到xiaoming的birth属性。

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};
var {name ,birth ,age} = xiaoming;
console.log(name);            //小明  解构赋值
console.log(xiaoming.age());//28
console.log(getAge());//NaN

// 如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，
//也就是xiaoming，这是符合我们预期的。

// 如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。
// 要保证this指向正确，必须用obj.xxx()的形式调用！

//解决办法
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};
console.log(xiaoming.age());//28


// ------- apply --------------------------------------------------

//虽然在一个单独的函数中，this指向 undefined 或者 window，不过还是可以控制的
//要指定函数的 this 指向哪个对象，可以用函数的本身 apply 的方法
//他接受两个参数，第一个参数是需要绑定的 this 变量，第二个是Arrray，是函数本身的参数

//对 对象 重复命名竟然不会报错！！！！  真是有意思了

console.log(Array(30).fill('-').join(''));

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); 
console.log(getAge());//NaN
getAge.apply(xiaoming, []); // 28, this指向xiaoming, 参数为空

console.log(xiaoming.age());//28


// 另一个与apply()类似的方法是call()，唯一区别是：

//     apply()把参数打包成Array再传入；

//     call()把参数按顺序传入。

// 比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：

// Math.max.apply(null, [3, 5, 4]); // 5
// Math.max.call(null, 3, 5, 4); // 5

// 对普通函数调用，我们通常把this绑定为null