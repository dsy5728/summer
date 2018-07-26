// day2
// 任务:

//     date
//     regExp
//     test1

// 全局对象

//     browser: window
//     node: global

// 正则表达式

// regExp: regular expression

// 正则表达式: 就是写一个表达式=> 用正则符号来表示一类字符串


//-------------------------------Date初始化---------------------------------------//
console.dir(Date);

const date1 = new Date();
const date2 = Date();

console.log('date1:', date1);;
console.log('date2:', date2);;

// instance 实例 typeof
console.log(date1 instanceof Date); // true
console.log(date2 instanceof Date); // false
/**
 * 总结:
 * 不使用new关键字初始化Date,返回的不是Date实例化对象
 */

 
 //---------------------Date的api--------------------------------//
 let date = new Date();
 console.log(date);
 console.log(date.getMonth());
 console.log(date.getFullYear());
console.log(date.getDay());


 //----------获取指定的Date对象---------------------------//
 console.log(new Date(2018, 6, 9, 11, 4, 20, 2 * 1000));
 //2018-07-09T03:04:22.000Z

 //时间戳
 let d = Date.parse('2018-07-09T03:04:22.000Z');
 console.log(d);//时间戳1531105462000

 
console.log(+new Date()); //这种形式也会输出时间戳
console.log(typeof (+'12306')) ;//number 
//（+‘’）会让字符串变成数字？？


//-------------------创建js 正则表达式对象--------------------//

// 字面量
let regExp1 = /^\d{3}\s\d{8}$/;
// new RegExp
let regExp2 = new RegExp(/^\d{3}\s\d{8}$/);
// 正则表达式语法
// 位置类
/*
^表示行的开头  例：^\d 表示必须用数字开头
$表示行的结束  例: \d$ 表示必须用数字结尾   
A|B可以匹配A或B     
// 字符类型

// 数字

\d digtal
\s space 空字符 表示空格, tab
\S 非空字符
\w word 字母,数字,_
\u \u4E00-\u9FA5 中文字符
. 任意字符除了\n

// 数量

? 0个或1个
+ 1+
* 任意个, 0个或多个

// 分组
() 把括起来的内容看作整体
// {} 精确表示数量
// 一个数字 {6} 6个 (\w\d){6} {{3,6}}
// [] 之一 [abc] [123344555] 一定是表示一个字符 [a-z1-9A-Z]

*/
// **YY-MM-dd hh-ss-mm**
function nowTimeStr(str) {
    const nowDate = new Date()
    return (str.replace('YYYY', nowDate.getFullYear())
            .replace('MM', nowDate.getMonth())
            .replace('dd', nowDate.getDay())
            .replace('hh', nowDate.getHours())
            .replace('ss', nowDate.getSeconds())
            .replace('mm', nowDate.getMinutes()))
}

console.log(nowTimeStr('**YYYY-MM-dd hh-ss-mm**')); // **2018-07-09 21-05-19"

function formatStr(str) {
    return str.replace(/\s+/g, ' ');
}


// ms google    ti      ibm
console.log(formatStr('ms google    ti      ibm'));

// 匹配 test

//1
console.log(/^\d{3}\s\d{8}$/.test('123 6666666'));//false

//2
var re = /^\d{3}\-\d{3,8}$/;
console.log(re.test('010-12345'));//true
console.log(re.test('123 12'));//false

// 替换 replace //, //g

// exec连续匹配

var re = /^(\d{3})-(\d{3,8})$/;
console.log(re.exec('010-12134'));
//[ '010-12134', '010', '12134', index: 0, input: '010-12134' ]
//index :  从第几个开始不匹配

// 拆分 split , ;   , 
console.log('ms,, google; , IBn'.split(/[,;\s]+/));
console.log('a b  c'.split(' '));//[ 'a', 'b', '', 'c' ]
console.log('a,b,  c'.split(/[\s\,]+/));//[ 'a', 'b', 'c' ]


//贪婪匹配

//正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符
var re = /^(\d+)(0*)$/;
console.log(re.exec('102300'));
//[ '102300', '102300', '', index: 0, input: '102300' ]
//\d+采用贪婪匹配

//必须让\d+采用非贪婪匹配（也就是尽可能少匹配），才能把后面的0匹配出来，
//加个?就可以让\d+采用非贪婪匹配：

re = /^(\d+?)(0*)$/;
console.log(re.exec('102300'));
// [ '102300', '1023', '00', index: 0, input: '102300' ]

// search 搜索 全局搜索
var r1 = /test/g;
// 等价于:
var r2 = new RegExp('test', 'g');

// 全局匹配可以多次执行exec()方法来搜索一个匹配的字符串。当我们指定g标志后，
// 每次运行exec()，正则表达式本身会更新lastIndex属性，表示上次匹配到的最后索引：

var s = 'JavaScript, VBScript, JScript and ECMAScript';
re=/[a-zA-Z]+Script/g;

console.log(re.exec(s));
// //[ 'JavaScript',
// index: 0,
// input: 'JavaScript, VBScript, JScript and ECMAScript' ]
console.log(re.lastIndex);//10

console.log(re.exec(s));
// [ 'VBScript',
//   index: 12,
//   input: 'JavaScript, VBScript, JScript and ECMAScript' ]
console.log(re.lastIndex);//20

console.log(re.exec(s));
// [ 'JScript',
//   index: 22,
//   input: 'JavaScript, VBScript, JScript and ECMAScript' ]
console.log(re.lastIndex);//29

console.log(re.exec(s));
// [ 'ECMAScript',
//   index: 34,
//   input: 'JavaScript, VBScript, JScript and ECMAScript' ]
console.log(re.lastIndex);//44

console.log(re.exec(s));
//null