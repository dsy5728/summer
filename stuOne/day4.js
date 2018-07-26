/**
 * 第四天的学习
 */
//----------------------------- RegExp --------------------------------------//
console.log(/((\d{3})\w(\s{2}))(\d{5})/.exec('123i  12345'));

// [ '123i  12345',
//   '123i  ',
//   '123',
//   '  ',
//   '12345',
//   index: 0,
//   input: '123i  12345' ]

//分组 

//正则里面的或  ====> |
let datePattern = /\d{2}|\d{4}/;
console.log(datePattern.test('98') && datePattern.test('1998'));//true


console.log(Array(30).fill('-').join(''));

//正则模式   /RegExp/g g (global)  i （ignore）//忽略大小写
// m(multiple line) u (unicode) s(dotAll)

//m模式----------------------------
//m模式只有换行符，且正则表达式中含有 ^ 或者 $ 的匹配表达式，m才有效



let multipleMode1 = /^abc/m;
let multipleMode2 = /^abc/;

let multipleLineStr = 'ajslgfj\nabc'
console.log(multipleMode1.test(multipleLineStr));//true
console.log(multipleMode2.test(multipleLineStr));//false

//^与字符串开始的位置以及 '\r' ,'\n' 之后的位置相匹配，而 '$' 与字符串最后的位置，以及
//'\r' ,'\n'之前的位置相匹配

let multipleMode3 = /abc$/m;
let multipleMode4 = /abc$/;

let multipleLineStr1 = 'abc\nasdv';

console.log(multipleMode3.test(multipleLineStr1));//true
console.log(multipleMode4.test(multipleLineStr1));//false


console.log(Array(30).fill('-').join(''));

//s模式------------------------------

let dotAllMode = /../;
let dotAllModeStr = '\n\n';
console.log(dotAllMode.test(dotAllModeStr)); // => false

let dotAllMode1 = /../s;
console.log(dotAllMode1.test(dotAllModeStr)); // =< true

//加上s就是true


console.log(Array(30).fill('-').join(''));


//如何用正则提取出字符串里面的文字----------------
let containZWStr = "hello I'm 小明,how are you !";
//中文的 unicode的范围为 4E00 - 9FA5
//[^\w]  代表 非
let ZHPattern = /([^\u4E00-\u9FA5]+?)([\u4E00-\u9FA5]+)([^\u4E00-\u9FA5]+)/
console.log(ZHPattern.test(containZWStr));//true 说明格式正确

let matchResult = containZWStr.match(ZHPattern);
console.log(matchResult); 
// [ 'hello I\'m 小明,how are you !',
//   'hello I\'m ',
//   '小明',
//   ',how are you !',
//   index: 0,
//   input: 'hello I\'m 小明,how are you !' ]

//要检验matchResult是什么数据类型

console.log(typeof(matchResult)); //object
console.log(Array.isArray(matchResult));//true  说明通过match得到的是数组
console.log(matchResult[2]);//得到小明



console.log(Array(30).fill('-').join(''));

/*-------------------------- json ------------------------------ */
//JSON 里所有的属性名都必须用双引号
//JSON里面不可以写注释，可以用数组来保存

const fs = require('fs');


let obj = {
    name: 'ly',
    age: 21,
    grade: 99,
    friendArray: ['jxq', 'fl', 'rbd'],
    func(params) {
        console.log('ES6对象内方法简写, 直接写函数名');
    }
}

// JSON 序列化
let  objJSONStr = JSON.stringify(obj);
fs.writeFileSync('./object.json',objJSONStr ,'utf-8');

 obj = {
    func: function func() {
        console.log('abc')
    },
    name: 'ly'
}

console.log(JSON.parse(JSON.stringify(obj)));//{ name: 'ly' }
// 克隆-------------------------------------------
// 方法一
let cloneObj = {};

// 下面这个不叫克隆,它不是深拷贝
// for (let attr in obj) {
//     cloneObj[attr] = obj[attr];
// }
// console.log(cloneObj);

const deepCopy = (obj) => {
    let cloneObj = {};
    for (let attr in obj) {
        if (typeof obj[attr] !== 'object') {
            cloneObj[attr] = obj[attr];
        } else {
            // 如果属性值是对象要递归拷贝
            cloneObj[attr] = deepCopy(obj[attr]);
        }
    }
}



// 方法二 使用json序列化再反序列化
cloneObj = {};
cloneObj = JSON.parse(JSON.stringify(obj));
console.log(cloneObj);
//  =>
//  { name: 'ly',
//   age: 21,
//   grade: 99,
//   friendArray: [ 'jxq', 'fl', 'rbd' ] }


//获取数据类型
// for...in     // Object.key()
const oneArray = [1,2,3];

console.log(typeof Object.keys(oneArray)[0]);//string


let symbol = Symbol();//独一无二的


let count = 0;
for (let i = 0; i < 100; ++i) {
    count = count++;
}
console.log(count);//0




// 如何把字符串变成数组








