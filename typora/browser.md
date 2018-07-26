# #BOM

## widow 全局作用域

widow 对象不但充当全局作用域，还表示浏览器窗口

### navigator

`navigator`对象表示浏览器的信息，最常用的属性包括：

- navigator.appName：浏览器名称；
- navigator.appVersion：浏览器版本；
- navigator.language：浏览器设置的语言；
- navigator.platform：操作系统类型；
- navigator.userAgent：浏览器设定的`User-Agent`字符串。

### screen

`screen`对象表示屏幕的信息，常用的属性有：

- screen.width：屏幕宽度，以像素为单位；
- screen.height：屏幕高度，以像素为单位；
- screen.colorDepth：返回颜色位数，如8、16、24。

#### location

```+
location对象表示当前页面的URL信息。例如，一个完整的URL：

http://www.example.com:8080/path/index.html?a=1&b=2#TOP

可以用location.href获取。要获得URL各个部分的值，可以这么写：

location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'

```



# #DOM

始终记住 dom 是一个树形结构，操作 dom 就几个 操作：

* 更新

* 遍历

* 删除

* 添加

  #### ##操作 HTML　必须找到这个元素，有三种方法：

  １.通过　id　名找到HTML元素

  ２.通过　class　类名　来找到HTML元素

  ３.通过标签名来找到HTML元素

  

  #### 第一种方法

```+
var test = doucument.getElementById('test');
//返回 ID 为 test 的节点

var trs = document.getElementById('test-table').getElementByTagName('tr')
//返回 ID 为 test-table 的节点，再返回内部为 tr 的节点

var reds = document.getElementById('test-div').getElementByTagName('red')
//返回 ID 为 test-div 的节点，再返回内部为 red 的节点

var cs = test.children
//获取 test 下所有直属子节点

var first = test.firstElementchild ;
var last = test.lastElementchild ;
//获取test 第一个，最后一一个节点
```



#### 第二种方法：

```+
// 通过querySelector获取ID为q1的节点：
var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
var ps = q1.querySelectorAll('div.highlighted > p');

```

#### 

#### 1.更新DOM

直接修改节点的文本，方法有两种：

###### 第一种：是修改 innerHTML 属性，不但可以修改一个DOM节点的文本内容，还可以直接通过HTML片段来修改DOM节点内部的子树：

```+
// 获取 <p id = "p-id" > ... </p>
var p = document.getElementById('p-id');

//设置 p 的内容为 ABC
p.innerHTML = 'ABC' ; // <p id = "p-id" >ABC</p>

//设置 HTML
p.innerHTML = 'ABC <span style = "color:red" >RED</span> XYZ' ;
//html的内容已经改变
```

用 innerHTML 要注意，是否要加上 HTML .如果写入的字符串是通过网络拿到了，要注意对字符编码来避免XSS攻击。

###### 第二种：是修改 innerText 和 textContent 属性，可以对字符串进行HTML 编码，保证无法设置HTML标签

```+
// 获取 <p id = "p-id" > ... </p>
var p = document.getElementById('p-id');

//设置文本
p.innerText = '<script> alert('hi') </script>'

```



##### 两者的区别在于读取属性时，`innerText`不返回隐藏元素的文本，而`textContent`返回所有文本 

##### 

###### ：DOM 节点 style 属性对应所有的CSS,可以直接获取或者设置

虽然 CSS 属性里有 font-size ,但是他并非 JavaScript 的属性，所以在JavaScript中改写为驼峰式命名 fontSize

```+
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingTop = '2em';
```

##### ＃＃还可以修改　HTML　的属性：

```+
<img id="image" src="smiley.gif">

<script>
	doucument.getElementById('image').src = "landscape.gif" ;
</script>
```



##### ## 还可以通过 JavaScript 改变HTML的样式

```+
<p id="p1"> Hello World! </p>

<script>
	document.getElementById('p1').style.color = "blue";
	document.getElementById('p1').fontFamily = "Arial";
	document.getElementById('p1').fontSize="larger";
</script>
```



#### 2.插入DOM

###### * 如果这个节点是空的：

例如<div>...</div>,那么直接使用 inner HTML= '<span>child</span>'，相当于插入了一个新的节点



###### *如果这个节点不是空的：

就不能这么做。否则，innerHTML 就会替换原来所有的节点



##### 插入节点的两种方法：

#### 第一种：使用 appendChild ,把一个节点添加到父节点的最后一个子节点

```+
<!-- HTML结构 -->
<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
```



把`<p id="js">JavaScript</p>`添加到`<div id="list">`的最后一项： 



```
var
    js = document.getElementById('js'),
    list = document.getElementById('list');
list.appendChild(js);
```

现在 HTML 结构变成了这样：

```
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="js">JavaScript</p>
</div>
```

//我们插入的 js 节点，是已经存在的。因此这个节点会从原来的地方删除，再插到新的地方。

##### 更多的时候，我们会创建一个空的节点，然后插入到指定的位置

###### 举例：

```+
<!-- HTML结构 -->
<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>

// haskell : ------------------------------------------------------------------//
// 1.<p></p>
// 2.<p id="haskell"></p>
// 3.<p id="haskell">Haskell</p>

var 
	list = document.getElementById('list'),
	haskell = document.creatElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);

<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="haskell">Haskell</p>
</div>
```





#### 第二种：把节点插到指定的位置

###### 可以使用`parentElement.insertBefore(newElement, referenceElement);`，子节点会插入到`referenceElement`之前。 

:假定我们要把 Haskell 插到 Python 前 --------------------------------------------------------------------------------

```+
 <!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>

//------------------------------------------------------
var 
	list = document.getElementById('list'),
	ref = document.getElementById('python'),
	haskell = document.creatElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell,ref)	

```



#### 3.删除DOM

要删除一个 DOM ，首先要获得节点本身以及他的父节点，然后调用父节点的 removeChild 把自己删除

```+
// 拿到待删除节点:
var self = document.getElementById('to-be-removed');
// 拿到父节点:
var parent = self.parentElement;
// 删除:
var removed = parent.removeChild(self);
removed === self; // true

```

注意到删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置。

当你遍历一个父节点的子节点并进行删除操作时，要注意，`children`属性是一个只读属性，并且它在子节点变化时会实时更新。

```+
<div id="parent">
    <p>First</p>
    <p>Second</p>
</div>

//--------------------------------------------------------------

var parent = document.getElementById('parent');
parent.removeChild(parent.children[0]);
parent.removeChild(parent.children[1]); // <-- 浏览器报错

```

浏览器报错：`parent.children[1]`不是一个有效的节点。原因就在于，当`<p>First</p>`节点被删除后，`parent.children`的节点数量已经从2变为了1，索引`[1]`已经不存在了。

因此，删除多个节点时，要注意`children`属性时刻都在变化。



# ＃JavaScript HTML DOM　事件

HTML DOM 使 JavaScript 有能力对 HTML 事件做出反应。 

#### 对事件做出反应：我们可以在事件发生时执行　JavaScript　。如：需要在用户点击某个执行代码，请向一个 HTML 事件属性添加 JavaScript 代码 ．

```+
onclick = javascript
```

##### ##HTML 的例子：

- 当用户点击鼠标时

- 当网页已加载时

- 当图像已加载时

- 当鼠标移动到元素上时

- 当输入字段被改变时

- 当提交 HTML 表单时

- 当用户触发按键时

  ##### ###改变文本：

```+
//改变文本内容的第一种方法：
<h1 onclick="this.innerHTML='Ooops!'">点击文本!</h1>    //文本内容会发生改变

//改变文本内容的第二种方法：
<h1 onclick="changetext(this)">点击文本！</h1>

<script>
function changetext(id){
    
     id.innerHTML="Ooops!";
    
}
</script>
```



##### ###点击显示时间：

```+
<p>点击按钮执行 <em>displayDate()</em> 函数.</p>
<button onclick="displayDate()"></button>

<script>
function displayDate(){
    
    document.getElementById("demo").innerHTML=Date();
    
}
</script>
<p id="demo"></p>
```

##### ###onload 和 onunload 事件

onload 和 onunload 事件会在用户进入或离开页面时被触发。

onload 事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。

onload 和 onunload 事件可用于处理 cookie。

```+
<body onload="checkCookies()">

<script>
function checkCookies(){
	if (navigator.cookieEnabled==true){
		alert("Cookies 可用")
	}
	else{
		alert("Cookies 不可用")
	}
}
</script>
<p>弹窗-提示浏览器 cookie 是否可用。</p>
	
</body>
```



##### ###   onchange 事件

```+
输入你的名字: <input type="text" id="fname" onchange="myFunction()">
<p>当你离开输入框后，函数将被触发，将小写字母转为大写字母。</p>

<script>
function myFunction(){
    var x = document.getElementById('fname');
    x.value = x.value.toUpperCase()
    
}
</script>
```

##### ###  onmouseover 和 onmouseout 事件

onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。 

```+
<div onmouseover="mOver(this)" onmouseout="mOut(this)" style="background-color :#D94A38 ; width: 120px; height: 20px ; padding : 40px ;" > Mouse Over Me </div>

<script>
function mOver(obj){
	obj.innerHTML="Thank You"
}
function mOut(obj){
	obj.innerHTML="Mouse Over Me"
}
</script>
```

##### ###  onmousedown、onmouseup 以及 onclick 事件

onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的所有部分。首先当点击鼠标按钮时，会触发  onmousedown 事件，当释放鼠标按钮时，会触发 onmouseup 事件，最后，当完成鼠标点击时，会触发 onclick 事件。 



# 操作表单：

JavaScript 的操作表单和 操作DOM 是类似的，因为表单本身也是 DOM

HTML表单的输入控件主要有以下几种：

- 文本框，对应的`<input type="text">`，用于输入文本；
- 口令框，对应的`<input type="password">`，用于输入口令；
- 单选框，对应的`<input type="radio">`，用于选择一项；
- 复选框，对应的`<input type="checkbox">`，用于选择多项；
- 下拉框，对应的`<select>`，用于选择一项；
- 隐藏文本，对应的`<input type="hidden">`，用户不可见，但表单提交时会把隐藏文本发送到服务器。

### 获取值：

```+
<input id="email" type="text">

<script>
var input = document.getElementById('email');
input.value;//获取‘用户输入的值’
</script>
```



###### 这种方式可以应用于 text ,password ,hidden ,select.但是，对于单选框和复选框，`value`属性返回的永远是HTML预设的值，而我们需要获得的实际是用户是否“勾上了”选项，所以应该用`checked`判断：

```
// <label><input type="radio" name="weekday" id="monday" value="1"> Monday</label>
// <label><input type="radio" name="weekday" id="tuesday" value="2"> Tuesday</label>
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
mon.value; // '1'
tue.value; // '2'
mon.checked; // true或者false
tue.checked; // true或者false
```



### 设置值

设置值和获取值类似，对于`text`、`password`、`hidden`以及`select`，直接设置`value`就可以：

```
// <input type="text" id="email">
var input = document.getElementById('email');
input.value = 'test@example.com'; // 文本框的内容已更新
```

对于单选框和复选框，设置`checked`为`true`或`false`即可。

### HTML5控件

HTML5新增了大量标准控件，常用的包括`date`、`datetime`、`datetime-local`、`color`等，它们都使用`<input>`标签：

```
<input type="date" value="2015-07-01">
```

```
<input type="datetime-local" value="2015-07-01T02:03:04">
```

```
<input type="color" value="#ff0000">
```

不支持HTML5的浏览器无法识别新的控件，会把它们当做`type="text"`来显示。支持HTML5的浏览器将获得格式化的字符串。例如，`type="date"`类型的`input`的`value`将保证是一个有效的`YYYY-MM-DD`格式的日期，或者空字符串。

### 提交表单

最后，JavaScript可以以两种方式来处理表单的提交（AJAX方式在后面章节介绍）。

方式一是通过`<form>`元素的`submit()`方法提交一个表单，例如，响应一个`<button>`的`click`事件，在JavaScript代码中提交表单：

```
<!-- HTML -->
<form id="test-form">
    <input type="text" name="test">
    <button type="button" onclick="doSubmitForm()">Submit</button>
</form>

<script>
function doSubmitForm() {
    var form = document.getElementById('test-form');
    // 可以在此修改form的input...
    // 提交form:
    form.submit();
}
</script>
```

这种方式的缺点是扰乱了浏览器对form的正常提交。浏览器默认点击`<button type="submit">`时提交表单，或者用户在最后一个输入框按回车键。因此，第二种方式是响应`<form>`本身的`onsubmit`事件，在提交form时作修改：

```
<!-- HTML -->
<form id="test-form" onsubmit="return checkForm()">
    <input type="text" name="test">
    <button type="submit">Submit</button>
</form>

<script>
function checkForm() {
    var form = document.getElementById('test-form');
    // 可以在此修改form的input...
    // 继续下一步:
    return true;
}
</script>
```

注意要`return true`来告诉浏览器继续提交，如果`return false`，浏览器将不会继续提交form，这种情况通常对应用户输入有误，提示用户错误信息后终止提交form。

在检查和修改`<input>`时，要充分利用`<input type="hidden">`来传递数据。

例如，很多登录表单希望用户输入用户名和口令，但是，安全考虑，提交表单时不传输明文口令，而是口令的MD5。普通JavaScript开发人员会直接修改`<input>`：

```
<!-- HTML -->
<form id="login-form" method="post" onsubmit="return checkForm()">
    <input type="text" id="username" name="username">
    <input type="password" id="password" name="password">
    <button type="submit">Submit</button>
</form>

<script>
function checkForm() {
    var pwd = document.getElementById('password');
    // 把用户输入的明文变为MD5:
    pwd.value = toMD5(pwd.value);
    // 继续下一步:
    return true;
}
</script>
```

这个做法看上去没啥问题，但用户输入了口令提交时，口令框的显示会突然从几个`*`变成32个`*`（因为MD5有32个字符）。

要想不改变用户的输入，可以利用`<input type="hidden">`实现：

```
<!-- HTML -->
<form id="login-form" method="post" onsubmit="return checkForm()">
    <input type="text" id="username" name="username">
    <input type="password" id="input-password">
    <input type="hidden" id="md5-password" name="password">
    <button type="submit">Submit</button>
</form>

<script>
function checkForm() {
    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    // 把用户输入的明文变为MD5:
    md5_pwd.value = toMD5(input_pwd.value);
    // 继续下一步:
    return true;
}
</script>
```

注意到`id`为`md5-password`的`<input>`标记了`name="password"`，而用户输入的`id`为`input-password`的`<input>`没有`name`属性。没有`name`属性的`<input>`的数据不会被提交。

# 操作文件：



