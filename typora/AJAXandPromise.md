# AJAX:

AJAX 不是 JavaScript 的书写规范，他是一个缩写 （Asynchronous JavaScript and XML ），意思就是用JavaScript执行异步网络请求。 

如果仔细观察一个 Form 的提交，你会发现，用户点击的 “ submit ” 按钮之后，页面会刷新。在刷新的页面里会告诉你提交成功还是提交失败了。但是不幸由于网络太慢或者是其他愿意，页面出不来就会显示404 NOT Found.

###### 这就是 web 的运行原理：一次 HTTP 对应一个页面。

如果要让用户留在当前页面，同时发出新的 HTTP　请求，就必须用　JavaScript　完成。接收到数据之后，再用JavaScript更新页面。这样一来，用户就可以感觉留在了当前页面，但是数据却可以不断地更新。

最早使用　ＡＪＡＸ　的Ｇｍａｉｌ。

用JavaScript写一个完整的AJAX代码并不复杂 ，但是要注意：AJAX　的请求是异步执行的，也就是说，要通过回调函数来获得响应。

##### 在现代浏览器上写AJAX主要依靠`XMLHttpRequest`对象：

```+
function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories');
request.send();

alert('请求已发送，请等待响应...');
```

## # AJAX - 创建 XMLHttpRequest 对象

```+
<div id="myDiv"><h2>使用 AJAX 修改该文本内容</h2></div>
<button type="button" onclick="loadXMLDoc()">修改内容</button>

<script>
function loadXMLDoc(){
    var xmlhttp;
    if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlHttp.onreadystatechange(){
     	if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}   
	}
    xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
	xmlhttp.send();
}
</script>
```

### 1. AJAX - 向服务器发送请求：

```+
xmlhttp.open("GET","ajax_info.txt",true);

    // method：请求的类型；GET 或 POST
    // url：文件在服务器上的位置
    // async：true（异步）或 false（同步）

xmlhttp.send();
```

### 2. AJAX - 服务器响应

###### respondText  :   获得字符串形式的响应数据

###### respondXML :  获得 XML 形式的响应数据



### 3. AJAX - onreadystatechange() 事件

| 属性               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| onreadystatechange | 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。 |
| readyState         | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。 	 	0: 请求未初始化 	1: 服务器连接已建立 	2: 请求已接收 	3: 请求处理中 	4: 请求已完成，且响应已就绪 |
| status             | 200: "OK"  	404: 未找到页面                               |





## 安全限制：

上面代码的URL使用的是相对路径。如果你把它改为`'http://www.sina.com.cn/'`，再运行，肯定报错。在Chrome的控制台里，还可以看到错误信息。

这是因为浏览器的同源策略导致的。默认情况下，JavaScript在发送AJAX请求时，URL的域名必须和当前页面完全一致。

完全一致的意思是，域名要相同（`www.example.com`和`example.com`不同），协议要相同（`http`和`https`不同），端口号要相同（默认是`:80`端口，它和`:8080`就不同）。有的浏览器口子松一点，允许端口不同，大多数浏览器都会严格遵守这个限制。

那是不是用JavaScript无法请求外域（就是其他网站）的URL了呢？方法还是有的，大概有这么几种：

##### 一是通过Flash插件发送HTTP请求，这种方式可以绕过浏览器的安全限制，但必须安装Flash，并且跟Flash交互。不过Flash用起来麻烦，而且现在用得也越来越少了。

##### 二是通过在同源域名下架设一个代理服务器来转发，JavaScript负责把请求发送到代理服务器：

```
'/proxy?url=http://www.sina.com.cn'
```

代理服务器再把结果返回，这样就遵守了浏览器的同源策略。这种方式麻烦之处在于需要服务器端额外做开发。

##### 第三种方式称为JSONP，它有个限制，只能用GET请求，并且要求返回JavaScript。这种方式跨域实际上是利用了浏览器允许跨域引用JavaScript资源：

```
<html>
<head>
    <script src="http://example.com/abc.js"></script>
    ...
</head>
<body>
...
</body>
</html>
```

JSONP 通常以函数调用的形式返回，例如，返回JavaScript内容如下：

```
foo('data');
```

这样一来，我们如果在页面中先准备好`foo()`函数，然后给页面动态加一个`<script>`节点，相当于动态读取外域的JavaScript资源，最后就等着接收回调了。

以163的股票查询URL为例，对于URL：<http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice>，你将得到如下返回：

```
refreshPrice({"0000001":{"code": "0000001", ... });
```

因此我们需要首先在页面中准备好回调函数：

```
function refreshPrice(data) {
    var p = document.getElementById('test-jsonp');
    p.innerHTML = '当前价格：' +
        data['0000001'].name +': ' + 
        data['0000001'].price + '；' +
        data['1399001'].name + ': ' +
        data['1399001'].price;
}
```

当前价格：上证指数: 2905.56；深证成指: 9465.802

最后用`getPrice()`函数触发：

```
function getPrice() {
    var
        js = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    js.src = 'http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice';
    head.appendChild(js);
}
```

就完成了跨域加载数据。



# #promise :

异步执行可以用回调函数实现：

```+
function callback() {
    console.log('Done');
}
console.log('before setTimeout()');
setTimeout(callback, 1000); // 1秒钟后调用callback函数
console.log('after setTimeout()');
```

观察上述代码执行，在Chrome的控制台输出可以看到：

```
before setTimeout()
after setTimeout()
(等待1秒后)
Done
```

可见，异步操作会在将来的某个时间点触发一个函数调用。

AJAX就是典型的异步操作。

```+
request.onreadystatechange = function(){

  if (request.readyState === 4) {
        if (request.status === 200) {
            return success(request.responseText);
        } else {
            return fail(request.status);
        }
    }


}
```

把回调函数写进AJAX 很正常，但是不好看。

我们先看一个最简单的Promise例子：生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败： 

```+
function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()...');
            resolve('200 OK');
        }
        else {
            log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}

```

```+
// JavaScript setTimeout()

setTimeout(要执行的代码, 等待的毫秒数)
setTimeout(JavaScript 函数, 等待的毫秒数)

<p id="content"> 请等三秒钟!</p>
<script>
	setTimeout("changeState()",3000 );  
	function changeState(){  
		let content=document.getElementById('content');  
		content.innerHTML="<div style='color:red'>我是三秒后显示的内容！</div>";  
}
</script>
```

##### 有了执行函数，我们就可以用一个Promise对象来执行它，并在将来某个时刻获得成功或失败的结果： 

```+
var p1 = new Promise(test);
var p2 = p1.then(function (result) {
    console.log('成功：' + result);
});
var p3 = p2.catch(function (reason) {
    console.log('失败：' + reason);
});
```

变量 p1 是一个Promise 对象，他负责执行 test 函数。由于 test 函数在内部是异步执行的，当 test 函数成功后，我们需要告诉 Promise 对象：

```+
p1.then(function(result){
    console.log('成功： ' + result);
});
```

当 test 函数失败后，我们也要告诉 Promise 对象：

```+
p2.catch(function (reason) {
    console.log('失败：' + reason);
});
```

Promise对象可以串联起来，所以上述代码可以简化为： 

```+
new Promise(test).then(function(result){
    console.log('成功： ' + result);
}).catch(function (reason) {
    console.log('失败：' + reason);
});
```



可见Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离了：

![promise](https://cdn.liaoxuefeng.com/cdn/files/attachments/001436512391628944d5da9a5654a35b0ace38246f30b9c000/l)

Promise还可以做更多的事情，比如，有若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数。

要串行执行这样的异步任务，不用Promise需要写一层一层的嵌套代码。有了Promise，我们只需要简单地写：

```
job1.then(job2).then(job3).catch(handleError);
```







