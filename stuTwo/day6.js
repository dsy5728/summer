

//Math
console.log(Math.random());// [0,1)

//取整的方法 ------------------------------------
console.log(parseInt(Math.random() *10 +1));//[1,10]

/*
* Math.floor()
* Math.ceil()
* Math.trunc()
* 四舍五入 Math.round()
* parseInt()
*/
// Math.floor() 向下取整
console.log(Math.floor(6.7));//6
console.log(Math.floor(-6.7));//-7

// Math.ceil() 向上取整
console.log(Math.ceil(6.7));//7
console.log(Math.ceil(-6.7));//-6

// Math.trunc() 完美解决了+0 和 -0 的问题
console.log(Math.trunc(+0.6));//0
console.log(Math.trunc(-0.6));//-0

//四舍五入
console.log(Math.round(10.7));//11
console.log(Math.round(10.3));//10
console.log(Math.round(-10.7));//-11
console.log(Math.round(-10.3));//-10

//heike 级取整方法
console.log(~~8.48);
console.log(~~-0.6);//0

// 1-10
console.log(~~(Math.random() *10 +1));//[1,10]


//
{
    // let a = b = 6;
}
// console.log(a); //b is not defined

//

// function func(){
//     var a = b = 6;

// }
// console.log(a);


console.log(Math.max(12,3,45,5));//45
console.log(Math.min(1,2,3,4));//1

let arr1 = [1,2,3,5,5,6,7,8,8];
console.log(arr1.concat(arr1));
console.log([...arr1,...arr1]);


//交换两个变量
let a=6 ,b = 8;
console.log(a,b);
[a,b] = [b,a]
console.log(a,b);


// push,pop
 a = 16,b = 18;
let stack = [];
stack.push(a,b);
console.log(a,b); // 16,18
a = stack.pop();
b = stack.pop();
console.log(a,b); // 18,16



//prototype
console.log(arr1);
console.log(Math.max(...arr1));//8
console.log(Math.max.apply(null,arr1));//8







//require

//alert  .... confirm  ...prompt  ...notification









