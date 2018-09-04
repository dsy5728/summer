//-------------------------------- 浏览器 ---------------------------------------------------//
//在编写 JavaScript ，需要充分考虑到浏览器的差异

//--------------------------------- 浏览器对象  -----------------------------------------------//
// window 对象，不但充当全局作用域，还表示浏览器窗口
//window 对象又 innerWidth 和 innerHeight,可以获取浏览器窗口的内部宽度和高度
'use strict'
// console.log('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);

//对应的，还有一个outerWidth和outerHeight属性，可以获取浏览器窗口的整个宽高。

//navigator 浏览器 ------------------------
// navigator.appNmae :浏览器名称
// navigator.appVersion ：浏览器版本
// navigator.language : 浏览器设置的语言
// navigator.platform : 操作系统类型
// navigator.userAgent : 浏览器设定的User-Agent字符串

// console.log('appName = ' + navigator.appName);
// console.log('appVersion = ' + navigator.appVersion);
// console.log('language = ' + navigator.language);
// console.log('platform = ' + navigator.platform);
// console.log('userAgent = ' + navigator.userAgent);

/*
screen
 
screen.width  //屏幕宽度
screen.height  //屏幕高度
screen.colorDepth  //返回颜色位数

*/
/*

location

location对象表示当前页面的URL信息。例如，一个完整的URL：

http://www.example.com:8080/path/index.html?a=1&b=2#TOP

可以用location.href获取。要获得URL各个部分的值，可以这么写：

location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'


*/

/*

document对象表示当前页面。在浏览器中以DOM形式表示树形结构，document对象就是树形结构的节点
document 属性的tittle是从html文档中 <tittle></tittle>读取的
document.tittle 可以改变浏览器的 tittle 还是蛮有意思的，啊哈哈
要查找DOM树的某个节点，需要从document对象开始查找。最常用的查找是根据ID和Tag Name。







*/