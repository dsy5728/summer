console.log(0.1+0.2 === 0.3 ); //false
console.log(undefined == false);//false
console.log(null == false);//false
console.log(' ' == false);//true
console.log('' == false);//true
let my_love;

function test(){
    'use strict'
    let newVariable;//严格模式不能直接声明变量
}
test();

// 正则里面的这占位符----------------------------------------o
let str = 'saclf is cool! asl;akkkkkkkkklk;;;;;;;;;;;ash;aj';

// 插一个very => clf is very cool!
 // 1. 找下标
 let index = str.indexOf('is');
 // 计算有用的下标
 index += 'is'.length - 1;
 // 拼接
 let resultStr = str.slice(0, index + 1).concat(' very').concat(str.slice(index + 1));
 console.log(resultStr);
 //saclf is very cool! asl;akkkkkkkkklk;;;;;;;;;;;ash;aj

 // 正则
 // js $1, $2 ~9
//  console.log(object);
str = str.replace(/(.+?is)(.+)/, `$1 very $2`);//非贪婪模式
console.log('regExp: ', str);

//$1-9只能在replace函数里用

//regExp:  saclf is very  cool! asl;akkkkkkkkklk;;;;;;;;;;;ash;aj

 // /(\d{3})\s\w+/ 总共有几个组?
 // 3个组 /((\d{3})\s(\w{5})\.)/


console.log('123456\+146 abcde.'.match(/((\d{3})\s(\w{5})\.)/));
// [ '146 abcde.',
//   '146 abcde.',
//   '146',
//   'abcde',
//   index: 7,
//   input: '123456+146 abcde.' ]
console.log(/((\d{3})\s(\w{5})\.)/.exec('123456\+146 abcde.'));
// [ '146 abcde.',
//   '146 abcde.',
//   '146',
//   'abcde',
//   index: 7,
//   input: '123456+146 abcde.' ]


// 命名方式 2种

// camel 驼峰命名法
// let myLoveFriend;

// kebab 烤肉串式 js标识符,数字,字母,$,_ php
// let my-love-friend;


let firmArray = ['IBM', 'Facebook']
let sourceArray = ['Google', 'Micro soft', 'TI'];
// firmArray 插到MS后面
sourceArray.splice(1, 0, ...firmArray); 
console.log(sourceArray);
console.log(sourceArray.splice(1, 0, ...firmArray));//返回[]

function printf(str, flag) {
    return console.log(str.replace('%d', flag));
}

printf('digtal %d', 666);

// ... 扩展运算符 减速运算符
// rest语法是用来接受
// 在数组和对象字面值里面用就是扩展.

let sourceObj = {
    attr1: 'abc'
};

let newObj = {
    attr2: 'def'
}
// // 方法一
// for (let attr in sourceObj) {
//     newObj[attr] = sourceObj[attr] ;
// }
// console.log(newObj);


// ...扩展
newObj = {
    ...newObj,
    ...sourceObj
}

console.dir(newObj);
//{ attr2: 'def', attr1: 'abc' }

console.time('test+');
console.timeEnd('test+');

//拼接就会产生新的字符串
//'+'比join的效率高\
let e1 = ['a','b','c'];
let e2 = new Map([['a',1],['b',2],['c',3]]);
let e3 = new Set(['a','b','c']);

e3.forEach(function (element, index, Array) {
    //console.log(element);
     console.log(index);
    // console.log(Array);
});
