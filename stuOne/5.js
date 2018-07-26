/*------------------------------ 高阶函数 ---------------------------------------*/
function add(x ,y , f){
    return f(x) + f(y);
}
var x = add (-5 ,6 ,Math.abs); //11
console.log(x);

//了解一个关键字，就要清楚他的存在有什么意义

/*-------------------------- map -------------------------------------- */
function pow (x){
    return x*x;
}
let arr = [1,2,3,4,5,6,7,8,9];
let result = arr.map(pow);
console.log(result); //[ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

//map 传入的参数是函数对象本身

//把array变成字符串

arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.map(String));//[ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
console.log(arr);//[1,2,3,4,5,6,7,8,9]
//map返回的是新数组，不改变原来的数组


/*-------------------------- reduce ---------------------------------------*/

//reduce的作用，可以把结果继续和序列的下一个元素做累积计算

console.log(Array(30).fill('-').join(''));

var arrTest = [1,2,3,4,5,6,7];
result = arrTest.reduce(function(x,y){
    return x+y;
})

//reduce 返回的也是新数组，和map一样

console.log(arrTest);
console.log(result);//28


arr.reduce(function(x,y){
    return x+y;
})

//练习  利用reduce（）求积
function product(arr) {
    return arr.reduce(function(x,y){
        return x*y;
    })
}
// 测试:
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}

/*--------------------------- splite ------------------------- */
//splite 函数用于将字符串分割成字符串数组
// String.split() 执行的操作与 Array.join 执行的操作是相反的。

let string = 'abcdef';
let stringArray = string.split('');

console.log(stringArray);

console.log(Array(30).fill('-').join(''));


//利用map和reduce操作实现一个string2int()函数：-------------------

function string2int(s) {
    function str2num(str){
        var strArr = str.split('');               //把字符串分割成字符串数组
        function toInt(data){
            return +data;                  //通过js的弱类型转换，实现字符类型到数字类型的转换
        }
        var numArr = strArr.map(toInt);           //通过map()把字符串数组转换成数字数组
        return numArr;
    }
    var num = str2num(s);
    var res = num.reduce(function (x,y) {        //通过reduce()把数字数组转换成数字量
        return x*10+y;
    });
    return res;
}
// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}
//测试通过


/*--------------------------- Number()函数 ---------------------------------- */

console.log(Array(30).fill('-').join(''));

var test1 = new Boolean(true);//1
var test2 = new Boolean(false);//0
var test3 = new Date();//1531459645628
var test4 = new String('999');//999
var test5 = new String('999 888');//NaN
console.log(test3);//2018-07-16T07:22:01.511Z
console.log(Date.parse(test3));
console.log(Number(test1));
console.log(Number(test2));
console.log(Number(test3));
console.log(Number(test4));
console.log(Number(test5));
//Number(object)




/*------------------------------- String函数 -------------------------------- */
// String() 函数把对象的值转换为字符串
// String(object)

// var test1 = new Boolean(true);//1
// var test2 = new Boolean(false);//0
// var test3 = new Date();//1531459645628
// var test4 = new String('999');//999
// var test5 = new String('999 888');//NaN
// console.log(Number(test1));
// console.log(Number(test2));
// console.log(Number(test3));
// console.log(Number(test4));
// console.log(Number(test5));


var t1 = new Boolean(1);
var t2 = new Boolean(0);
var t3 = new Boolean(true);
var t4 = new Boolean(false);
var t5 = new Date();
var t6 = new String("999 888");
var t7 = 12345;

console.log(String(t1));//true
console.log(String(t2));//false
console.log(String(t3));//true
console.log(String(t4));//false
console.log(String(t5));//Fri Jul 13 2018 13:50:33 GMT+0800 (中国标准时间)
console.log(String(t6));//999 888
console.log(String(t7));//12345

/*--------------------------- parseFloat() 函数-----------------------------*/
// parseFloat() 函数可解析一个字符串，并返回一个浮点数。

// 该函数指定字符串中的首个字符是否是数字。
// 如果是，则对字符串进行解析，直到到达数字的末端为止，然后以数字返回该数字，而不是作为字符串
//parseFloat(string)

// 注意： 字符串中只返回第一个数字。

// 注意： 开头和结尾的空格是允许的。

// 注意： 如果字符串的第一个字符不能被转换为数字，那么 parseFloat() 会返回 NaN。
console.log(parseFloat('10')); //10
console.log(parseFloat(' 7 '));//7
console.log(parseFloat('10.33'));//10.33
console.log(parseFloat('10 20 30'));//10
console.log(parseFloat('a10'));//NaN


/*--------------------------- parseInt() 函数-----------------------------*/
// parseInt() 函数可解析一个字符串，并返回一个整数。

// 当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

// 当忽略参数 radix , JavaScript 默认数字的基数如下:

//   如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。
//   如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。
//   如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。


// parseInt(string, radix)
// 注意： 只有字符串中的第一个数字会被返回。
// 注意： 开头和结尾的空格是允许的。
// 注意：如果字符串的第一个字符不能被转换为数字，那么 parseInt() 会返回 NaN。
// 注意：在字符串以"0"为开始时旧的浏览器默认使用八进制基数。ECMAScript 5，默认的是十进制的基数。

console.log(parseInt('10'));//10
console.log(parseInt('10.33'));//10
console.log(parseInt('10 20 30'));//10
console.log(parseInt('50 years'));//50
console.log(parseInt('h50'));//NaN
console.log(parseInt('10',10));//10   10进制
console.log(parseInt('010'));//10     10进制
console.log(parseInt('10',8));//8      8进制
console.log(parseInt('10',16));//16    16进制
console.log(parseInt('0X10'));//16     16进制

/*-------------------------------- filter ------------------------------ */
// filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
// 和map()类似，Array的filter()也接收一个函数。和map()不同的是，filter()把传入的函数依次作用于每个元素
// ，然后根据返回值是true还是false决定保留还是丢弃该元素

//例子  在一个函数中，删除奇数
 arr = [1,2,3,4,5,6,7,8];
 result = arr.filter(function(x,y){ //在这里，只传一个参数和传两个参数是一样的
    return x%2 == 0;
})
console.log(result);//[ 2, 4, 6, 8 ]

 arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
console.log(r);; // ['A', 'B', 'C']

//以上是filter函数作为筛选用途

//回调函数
 arr = ['A', 'B', 'C'];
r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});

/*--------------------------------- toString ------------------------------ */
//可以通过不同进制把一个数字变成字符串

let number = 15;
console.log(number.toString());//15
console.log(number.toString(2));//1111
console.log(number.toString(8));//17
console.log(number.toString(10));//15
console.log(number.toString(16));//f




/*-------------------------------- sort -------------------------------------- */
// Array的sort()方法默认把所有元素先转换为String再排序，
// 结果'10'排在了'2'的前面，因为字符'1'比字符'2'的ASCII码小。

console.log([10,20,1,2].sort()); //[ 1, 10, 2, 20 ]

//幸运的是，sort（）也是一个高阶函数

var a = [10,20,1,2];
a.sort(function(x,y){
    if (x < y) {
        return -1;//不交换
    }
    if (x > y) {
        return 1;//交换
    }
    return 0;
})
console.log(a); //[ 1, 2, 10, 20 ]

//sort 函数会直接对arr进行修改，但他返回的结果还是Array

let arr1 = ['A','C','B'];
let arr2 = arr1 .sort();
console.log(arr1);//[ 'A', 'B', 'C' ]
console.log(arr2);//[ 'A', 'B', 'C' ]
console.log(arr1 === arr2);//true