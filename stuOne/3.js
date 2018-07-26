/*
第二天的js学习




 */

const date1 = new Date();
const date2 = Date();
console.log(date1);
console.log(date2);
console.log(date1 instanceof Date);       //true
console.log(date2 instanceof Date);       //false
console.log(date1.toLocaleString());
console.log(date1.toUTCString());

console.log(+new Date());     //时间戳

//快速将字符串变成数
console.log(+'123456');

//打印字符串  谷歌规范，不用双引号 拼接字符串用反引号
let a = 'hello';
let b = 'world';
console.log(a + b);
console.log(`${a}${b}`);   //占位符   使用拼接字符串是用反引号，更好
                           //模板字符串
/*
//console.time
console.time('测试反引号拼接');
while (10*100){
    a + b ;

}

console.timeEnd('测试反引号拼接');
*/
//要在双引号里打印单引号  "hello"
console.log('"hello"');
console.log('\"hello\"`');



/*---------------------------RegExp------------------------------*/
//判断一个是否是合法的Email
//   \d可以匹配一个数字，\w可以匹配一个数字或者字母，'.'可以匹配任意字符
console.log('a b   c'.split(' '));

//创建js 正则表达式变量
//字面量

