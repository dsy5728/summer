//对象 条件判断 循环 Map和Set iterable

//对象      最后一个键值对不需要在末尾加 ','

var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
//访问属性是通过.操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来：
a1 = xiaoming.name + xiaoming.school;
console.log(a1);
a2 = xiaoming.age;
console.log(a2);            //不存在不报错，返回undefined

//js的对象是动态类型，可以改变

a3 = xiaoming.age;        //undefined
console.log(a3);
xiaoming.age = 18;
console.log(xiaoming);           //{   
                                    //name: '小明',
                                    // birth: 1990,
                                    // school: 'No.1 Middle School',
                                    // height: 1.7,
                                    // weight: 65,
                                    // score: null,
                                    // age: 18 }
          


//检测对象是否有某个属性，用in
a4 = 'name' in xiaoming;                 //true
a5 = 'grade' in xiaoming ;               //false
console.log(a4);        
console.log(a5);        

//!

a6 = 'toString' in xiaoming ;
console.log(a6);//true

//因为toString定义在object对象中，而所有对象最终都会在原型链上指向object，所以xiaoming也拥有toString属性。
//要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法：

a7 = xiaoming.hasOwnProperty('toString');
console.log(a7);//false

// 总结：
// js的对象是动态的，是可以改变和增加的。但是字符串不能使用下标改变
// 要判断js中是否有某个对象，有两种方法
// 第一种：in
//     但是对象继承的属性无法改变
// 第二种：hasOwnProperty
//     不会出错但是有点麻烦



//条件判断 if else 和C语言基本一样

//循环    for循环最大的用处就是遍历数组

var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}                          //注意break的用法

/*---------------------- for in 遍历对象 -----------------------------*/ 
//for in 可以把一个对象的所有属性循环出来
let o = {
    name:'dsy',
    age:'18',
    friends:'cx',
    grade:'dayi',
    dream:'make a fortune'

}

for (let key in o){
    console.log(key);
}
// name
// age
// friends
// grade
// dream
for (let s in o){
    if(o.hasOwnProperty(s)){
        console.log(s);
    }
}
// name
// age
// friends
// grade
// dream
// 遍历属性的保险做法

/*------------------------- for in 遍历数组  -------------------------------------- */
//Array也是对象，也可以用for...in   遍历
let t =['a','b','c']
for(let i in t){
    console.log(i);       //0,1,2
    console.log(t[i]);    //'a','b','c'
}
//while 和 do while 的用法也和C语言类似


/*-------------------- 二维数组 的 快速查找方式 ------------------------*/
//Map和Set

//Map
let b1 = new Map([['a',18],['b',19],['c',20]]);
let b2 = b1.get('a');
console.log(b2);// 18

let b3 = new Map();
b3.set('a',18);
b3.set('b',19);
b3.set('c',20);
console.log(b3);           //Map { 'a' => 18, 'b' => 19, 'c' => 20 }

let b4 = b3.has('a');
console.log(b4);           //true
let b5 = b3.get('b');
console.log(b5);           //19
b3.delete('b');
let b6 = b3.has('b');
console.log(b6);           //false
let b7 = b3.get('b');      //undefined
console.log(b7);           
console.log(b3);           //Map { 'a' => 18, 'c' => 20 }


//Set
let c1 = new Set();
let c2 = new Set([1,2,3])           //Set { 1, 2, 3 }
console.log(c2);

let c3 = new Set([1,2,3,3,3,'3']);     //Set { 1, 2, 3, '3' }
console.log(c3);                       //重复的元素在Set中会被过滤掉

//增加元素的方法      add(key)  

c3.add(4);
console.log(c3);//Set { 1, 2, 3, '3', 4 }

c3.add(4);
console.log(c3);//Set { 1, 2, 3, '3', 4 }



//删除元素的方法      delete(key)

c3.delete('3');
console.log(c3);//Set { 1, 2, 3, 4 }

c3.delete('3');
console.log(c3);//Set { 1, 2, 3, 4 } //不会报错



/*------------------- itrable （可迭代的）--------------------------------*/
//遍历数组可以使用下标，但是遍历Map和Set没有办法使用下标
//Array，Map，Set都是iterable 类型
//具有 iterable 类型的集合都可以通过  for.....of 循环来遍历
 
/*---------------for .....of    遍历集合 --------------------------------*/
// for ...in 取下标 ，for ...of 取对象
let d1 = ['a','b','c'];//数组
let d2 = new Map([['a',1],['b',2],['c',3]]);//Map
let d3 = new Set(['a','b','c']);//Set

for ( let x of d1){
    console.log(x);
}

// a
// b
// c

for ( let x of d2){
    console.log(x);
}

// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]

for ( let x of d3){
    console.log(x);
}

// a
// b
// c

// 你可能会有疑问，for ... of循环和for ... in循环有何区别？

// for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。

// 当我们手动给Array对象添加了额外的属性后，for ... in循环将带来意想不到的意外效果：

 var a = ['A', 'B', 'C'];
 a.name = 'Hello';
 for (var x in a) {
     console.log(x); // '0', '1', '2', 'name'
 }

// for ... in循环将把name包括在内，但Array的length属性却不包括在内。

// for ... of循环则完全修复了这些问题，它只循环集合本身的元素：

 a = ['A', 'B', 'C'];
 a.name = 'Hello';
 for (var x of a) {
     console.log(x); // 'A', 'B', 'C'
 }

// 这就是为什么要引入新的for ... of循环。
//忘记 for in    bug太多没意思

//然而，更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。
/*-------------------- forEach 接收一个函数，每次迭代就自动回调该函数-------------------*/


let e1 = ['a','b','c'];
let e2 = new Map([['a',1],['b',2],['c',3]]);
let e3 = new Set(['a','b','c']);

e1.forEach(function (element ,index ,Array) {
    console.log(element); //a b c
    console.log(index);// 1 2 3
    console.log(Array);//['a','b','c']
});


//[键，值]

e2.forEach(function (value, key, Map) {
   
     console.log(value);//1 2 3
    console.log(key);//a b c 
    console.log(Map);//Map { 'a' => 1, 'b' => 2, 'c' => 3 }
});

e3.forEach(function (element, sameElement, Set) {
    console.log(element);//a b c
    console.log(sameElement);//a b c
    console.log(Set);//Set { 'a', 'b', 'c' }
});

