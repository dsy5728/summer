//求幂运算
//Math.pow()
// **
console.log(2 ** 16);

console.log(String.fromCodePoint( 2 ** 16 +10));//无效字符
console.log(String.fromCodePoint( 2 ** 16 + 10 +1));//无效字符

console.log('a'.codePointAt(0));//97
console.log((97).toString(16));//61
// ------------------------ codePointAt() 和 charAt() -----------------------------
// 1、chatAt()——提取指定字符串

// 2、codePointAt()——提取索引字符代码点

var s1 = "?";
console.log(s1.length);//1

var s2 = 'zhuyilong and baiyu';
//string.length  可以获取字符串的长度
console.log(s2.length);// =>19
//string.charAt()  可以查找字符串的位置 ， 和 indexof 有点像
console.log(s2.charAt(2));// u
//string.charCodeAt() 可以查找汉字的编码
console.log(s2.charCodeAt(2));//117
//string.fromCharCode()  根据编码返回汉字
console.log(String.fromCodePoint(117));//u

// 获取字符串长的的三种方法 -------------------------------------------------------------

//第一种：
let string = '我超级喜欢朱一龙！';

//第一种  string.length
console.log(string.length);//9

//第二种 扩展运算符
console.log([...string].length);//9

//第三种 



// utf - 16 2
//预留字符 \uB000 - \uBFFF

let char = String.fromCodePoint( 2 ** 16 + 10 +1);
console.log(char.length);//2
console.log([...char].length);//1
/*  其实扩展运算符就是 用 for ... of 遍历一遍数组
let Array = []；
for(let s of str){  

    arr.push(char);
}
return arr.length                     //for...of 是ES6新增的
 */

function mySlice(array, start) {
    let resultArray = [];
    for (let index = start; index < array.length; ++index) {
        resultArray.push(array[index])
    }
    return resultArray;
}


 //有 length 属性的都是类数组 ---------------------------------
 function func(){
     console.log(arguments.length);//3
     console.log(arguments[0]);//a
     //arguments 可以获取下标，可以获取数组，但他不是数组
     console.log(Array.isArray(arguments));//false
     console.log(Array.isArray([1,2,3]));//true
     // arguments.slice(0,) ES5
     let argumentsArray =  Array.prototype.slice.call(arguments); // 临时绑定this slice()
    
     // 永久绑定 bind
    console.log('argumentsArray:', argumentsArray);
    console.log(Array.isArray(...charArray));//false
    // arguments === (...charArray)

 }
 let charArray = ['a','b','c'];
 func(...charArray);


// -------------------------------------

// oop Object Oriented Programming
// 基本概念： 2
// 1. 类 ---- class
// 2. 实例 ---- instance instanceOf 

// ES6 class
// 实例就是对象

/*
struct {
    int a,
    char b
}
class apple {
    name,
    age.
    func() {
    }
}
*/
// class 数据类型的集合 + 方法

// c++ struct class
// oop 基本特性
// 封装, 继承 

let obj = {
    _attr :'ly'

}
class Father {};
class Son extends Father {};

// ES没有class
// prototype, __proto__

// ES constructor

function student(){
    this.name = 'ly';
}
let stu = new student() ;

// prototype绑定在构造函数上
// __proto__ 绑定在实例对象上面

console.log(student.prototype); //student {}
console.log(stu.__proto__);//student {}
console.log(Object.is(student.prototype,stu.__proto__));//true
// Object.is() 可以判断两个值是否相同，并且解决了ES5 '===' 中 NaN 和 NaN 不相同，+0 和 -0 不相同的情况

// 如何从实例对象访问原型 =》 
let arr1 = new Array();
console.log(arr1.__proto__ === Array.prototype);//true
console.log(Object.getPrototypeOf(arr1));//数组 []

//arguments 和 agrs
function hasManyArguments(argumentObj) {
    console.log(argumentObj.firstArg);
}

hasManyArguments({ firstArg: 'ly' });//ly


class person {
    /**
     *
     *@param  {object}options
     * @class person
     */   
    constructor(options){
        this.name = options.name;
        this.__ID__ = options.id;
    }
     

}
//当传入的对象有很多个的时候，可以传入对象  （options）
class person1{
    constructor(options){
        this.__ID__ = options.id;
        this.name = options.name;
    }
    getID() {
        console.log('Get ID:');
        return this.__ID__;
    }
    setID(newID) {
        console.log('Set ID');
        this.__ID__ = newID;
    }
}
let p1 = new person1({ name : 'dsy' , id: '1111'})
console.log(p1.getID());

// 第二种加强封装  访问器和控制器 getter setter

class person2 {
    constructor(options){
        this.name = options.name;
        this.__ID__ = options.id;
    }
    get ID(){
        console.log('Get id:');
        return this.__ID__;
    }
    set ID(newID) {
        console.log('Set id');
        this.__ID__ = newID
    }
}
let p2 = new person2({name :'dsy',id:'11111'});
console.log(p2.ID);

//------------------------------------------

let oneObj = {
    get name() {
        return 'ly'
    },
    set name(a) {

    }
}
console.log(oneObj.name);//ly

let aObject = Object.create({mySlice}); 
console.log(aObject.hasOwnProperty('mySLice'));//false
console.log('mySlice' in aObject);//true

// for (let i = 0; i < 10; ++i) {
//     for (let i = 0; i < 10; ++i) {
//         for (let i = 0; i < 10; ++i) {
//             let flag = false;
//             if (flag = true ) {
//                 console.log('from 4');
//                 break;
//             }
//             for (let i = 0; i < 10; ++i) {
//                 if(condition = true) {
//                     flag = true;
//                     break;
                   
//                 }
//             }
//         }
//     }
// }