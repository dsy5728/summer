## 函数本身的 call 和 apply 的方法

### 1.call()

​	语法：obj1.call(obj2[,param1,param2,...])
	定义：用obj2对象来代替obj1，调用obj1的方法。即将obj1应用到obj2上。
	说明： 如果没有提供 obj2参数，那么 Global 对象被用作 obj2。 

#### 2.apply()

​	语法：obj1.call(obj2[,arrArg])
	定义：用obj2对象来代替obj1，调用obj1的方法。即将obj1应用到obj2上。

​	说明：call ()和apply()作用一样，但是call()可以接收任何类型的参数，而apply()只能接收数组参数。	

####       作用：这两个函数都是在特殊的作用域中调用函数，能改变函数的作用域，实际上是

###      改变函数体中 this 的值



```php+HTML

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25
getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空




```

























