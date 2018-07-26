/*------------------------------- 标准对象 ---------------------------------- */
console.log(typeof 123);//number
console.log(typeof NaN);//number
console.log(typeof 'str');//string
console.log(typeof true);//boolean
console.log(typeof undefined);//undefined
console.log(typeof []);//object
console.log(typeof {});//object
console.log(typeof null);//object

//typeof 无法判断对象和数组

//null 和 Array 的类型都是object

//包装对象

//字符串也区分string类型和它的包装类型。包装对象用new创建：

let a1 = new Number(123);
let a2 = new String('str');
let a3 = new Boolean(true);

console.log(a1);    //[Number: 123]
console.log(a2);    //[String: 'str']
console.log(a3);    // [String: 'str']


console.log(typeof new Number(123));//object
console.log(typeof new String('str'));//object
console.log(typeof new Boolean(true));//object

//如果我们在使用Number、Boolean和String时，没有写new会发生什么情况？
//此时，Number()、Boolean和String()被当做普通函数，
//把任何类型的数据转换为number、boolean和string类型（注意不是其包装类型）：
var n = Number('123'); // 123，相当于parseInt()或parseFloat()
typeof n; // 'number'

var b = Boolean('true'); // true
typeof b; // 'boolean'

var b2 = Boolean('false'); // true! 'false'字符串转换结果为true！因为它是非空字符串！
var b3 = Boolean(''); // false

var s = String(123.45); // '123.45'
typeof s; // 'string'



// 不要使用new Number()、new Boolean()、new String()创建包装对象；

// 用parseInt()或parseFloat()来转换任意类型到number；

// 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；

// 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；

// typeof操作符可以判断出number、boolean、string、function和undefined；

// 判断Array要使用Array.isArray(arr)；

// 判断null请使用myVar === null；

// 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；

// 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。





/*------------------------------- Date ------------------------------------- */

var now = new Date();
console.log(now);//2018-07-12T10:20:51.957Z
console.log(now.getFullYear());//2018
console.log(now.getMonth());//6  0表示一月，6表示7月
console.log(now.getDate());//12
console.log(now.getDay());//4 星期四
console.log(now.getHours());//18
console.log(now.getMinutes());//20
console.log(now.getSeconds());//51
console.log(now.getMilliseconds());//957

//第一种创建指定日期和时间的方法

let b1 = new Date(2015, 5, 19, 20, 15, 30, 123);
console.log(b1);
//2015-06-19T12:15:30.123Z


//第二种创建时间和日期的方法
let d1 = Date.parse('2015-06-19T12:15:30.123Z');
console.log(d1);//1434716130123

let d2 = new Date(1434716130123)
console.log(d2);  //2015-06-19T12:15:30.123Z
console.log(d2.getMonth());//5


var d = new Date(1435146562875);
 
console.log(d.toLocaleString());// '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
console.log(d.toUTCString());// 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时



/*------------------------------- RegExp ------------------------------------ */
//用\d可以匹配一个数字，\w可以匹配一个字母或数字
//.可以匹配任意字符
//'js.'可以匹配'jsp'、'jss'、'js!'
//用*表示任意个字符（包括0个)
//用+表示至少一个字符
//用?表示0个或1个字符
//用{n}表示n个字符，用{n,m}表示n-m个字符：



// 1.\d{3}表示匹配3个数字，例如'010'；

// 2.\s可以匹配一个空格（也包括Tab等空白符），所以\s+表示至少有一个空格，例如匹配' '，'\t\t'等；

// 3.\d{3,8}表示3-8个数字，例如'1234567'。

// 进阶

// 要做更精确地匹配，可以用[]表示范围，比如：

//     [0-9a-zA-Z\_]可以匹配一个数字、字母或者下划线；

//     [0-9a-zA-Z\_]+可以匹配至少由一个数字、字母或者下划线组成的字符串，比如'a100'，'0_Z'，'js2015'等等；

//     [a-zA-Z\_\$][0-9a-zA-Z\_\$]*可以匹配由字母或下划线、$开头，后接任意个由一个数字、字母或者下划线、$组成的字符串，也就是JavaScript允许的变量名；

//     [a-zA-Z\_\$][0-9a-zA-Z\_\$]{0, 19}更精确地限制了变量的长度是1-20个字符（前面1个字符+后面最多19个字符）。

// A|B可以匹配A或B，所以(J|j)ava(S|s)cript可以匹配'JavaScript'、'Javascript'、'javaScript'或者'javascript'。

// ^表示行的开头，^\d表示必须以数字开头。

// $表示行的结束，\d$表示必须以数字结束。

// 你可能注意到了，js也可以匹配'jsp'，但是加上^js$就变成了整行匹配，就只能匹配'js'了。

//javascript 有两种创建正则表达式的方法

//第一种方式是直接通过/正则表达式/写出来

//第二种方式是通过new RegExp('正则表达式')创建一个RegExp对象

var rel1 = /ABC\-010/;

var rel2 = RegExp('ABC\\-010');

console.log(rel1);//   /ABC\-010/
console.log(rel2);//    /ABC\-010/

//如何判断正则表达式石是否匹配

var re = /^\d{3}\-\d{3,8}$/;
re.test('010-12345'); // true
re.test('010-1234x'); // false
re.test('010 12345'); // false











/*------------------------------- JSON -------------------------------------- */
//把对象变成字符串O

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s1 = JSON.stringify(xiaoming);
console.log(s1);//// {"name":"小明","age":14,"gender":true, "height":1.65, "grade":null, "middle-school":"\"W3C\" Middle School", "skills":["JavaScript","Java","Python","Lisp"]}
console.log(xiaoming);
// { name: '小明',
//   age: 14,
//   gender: true,
//   height: 1.65,
//   grade: null,
//   'middle-school': '"W3C" Middle School',
//   skills: [ 'JavaScript', 'Java', 'Python', 'Lisp' ] }

var s2 = JSON.stringify(xiaoming, null, '');
console.log(s2);
// {
//     "name": "小明",
//     "age": 14,
//     "gender": true,
//     "height": 1.65,
//     "grade": null,
//     "middle-school": "\"W3C\" Middle School",
//     "skills": [
//       "JavaScript",
//       "JOava",
//       "Python",
//       "Lisp"
//    ]

//第二个参数用于控制如何筛选对象的键值
//如果只想输出指定的属性，可以传入Array

var s3 = JSON.stringify(xiaoming, ['name', 'skills'], '  ');
console.log(s3);
// {
//     "name": "小明",
//     "skills": [
//       "JavaScript",
//       "Java",
//       "Python",
//       "Lisp"
//     ]
//   }
  
//传入函数，这样每个键值对都会被函数处理


    

console.log(JSON.parse('[1,2,3,true]'));//[ 1, 2, 3, true ]
console.log(parseInt('1,2,3,true'));
