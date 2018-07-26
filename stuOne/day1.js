//js对大小写是敏感的

//summary   for...in遍历对象的属性，由于数组也是对象，所以
//数组每个元素的索引，被视为对象的属性
const array = [1, 3, 5];
for (let attr in array) {
    console.log(attr);//0 1 2
    console.log(typeof attr);//string string string
};
//for ...in 对Array 遍历循环得到的是string，而不是number

console.log(Object.keys(array));//[ '0', '1', '2' ]

//返回值   一个表示给定对象的所有可枚举属性的字符串数组。

//Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，
//数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。

//let 声明的变量只在其声明的块或子块中可用，这一点，与var相似。
//二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数

function varTest() {
    var x = 1;
    if (true) {
        var x = 2;       // 同样的变量!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;       // 不同的变量    
        console.log(x);  // 2  
    }
    console.log(x);  // 1
}
 varTest()
 letTest()
