//基本语法到数组


//不同类型的变量可不可以反复赋值

let b = 123 ;
b = "ABC" ;
console.log(b);      //java是静态语言，不能把字符串赋值给变量。但是js可以 




//字符串的应用

let c1 = 'I \'m OK !';            //字符串里用字符，要用转义字符'\'
let c2 = `多行
         字符串
         好玩
`;
let c3 =`hello, ${c1}, ${c2}`;
let c4 =`hello${c1}${c2}`;
console.log(c2);
console.log( c1 + c2 );
console.log('hello' + 'beauty ');
console.log(c3);           //字符串可有点意思
console.log(c4);



//4个操作字符串

let d1 = 'Hello world!';
let d2 = 'git 可真不是一个好学的东西';
let d3 = '不好学的东西都很游戏，可惜我不会，hhhh';

let d4 = d1[0];
console.log(d4);//H
d1[0] = 'K';
console.log(d4);   //由此可见字符串是不可改变的，对字符串的某个索引赋值，不会发生改变
let d5 = d1.toUpperCase();//HELLO WORLD!
console.log(d5);
let d6 = d1.toLowerCase();//hello world!
console.log(d6);

let d7 = d1.indexOf('world');
let d8 = d1.indexOf('World');
console.log(d7);        //搜索字符串出现的地方 ,返回6
console.log(d8);          //没有找到 World 的地方，返回-1

let d9 = d1.substring(0,7);        //从0-7，第7个不算在里面[0，7）
let d10 = d1.substring(7);         //从7开始到结束
let d11 = d1.substring(3,8);
console.log(d9);
console.log(d10);   
console.log(d11);





//js的数组也是有意思的


let arr = [1, 2, 3.14, 'Hello', null, true];
let e1 = arr.length; // 6       arr.length 可用的函数
console.log(e1);
arr.length = 3;
console.log(arr);     //直接给Array的length赋一个新的值会导致数组发生变化

arr[2] = 'a';
console.log(arr);     //可以通过对arr赋值改变arr
//如果通过索引赋值时，超过数组的长度，也会改变array大小的变化
 arr = [1, 2, 3.14, 'Hello', null, true];
arr[7] = 'T';
console.log(arr);  //没有赋值的都是undefined



//数组的几个公式


//array中的indexOf和string的用法相同
 arr = [1,2,3,4,'a','b','Hello'];
let f1 = arr.indexOf(3);//2          与string类似，搜索一个指定元素的位置
let f2 = arr.indexOf('a','b');//4     说明不能同时搜索两个元素的位置
console.log(f1);
console.log(f2);           //注意30和'30'不同

//数组中的slice对应字符串中substring
let f3 = arr.slice(0,3);//[1,2,3]  从索引0开始到3结束，索引3不包括，和字符串一样，[0，3）
let f4 = arr.slice(3);//[4,'a','b','Hello']   从索引3开始到结束,包括3  
console.log(f3);
console.log(f4);

console.log(Array(30).fill('-').join(''));
console.log(arr);
//数组中push()向array末尾增加元素，pop删除最后一个元素
let f6 = arr.push(1,2);
console.log(arr);
let f7 = arr.pop()
console.log(arr);      //空数组的pop不会报错，只会返回undefined

//shift和unshift   unshift向头部增加元素，shift删除第一个元素
let f8 = arr.unshift(1,'2');
console.log(arr);
let f9 = arr.shift()
console.log(arr);
//sort 自动对数组进行排序
arr.sort(); // sort 的规律很傻的....
console.log(arr);        
//reverse
arr.reverse();
console.log(arr);

/*----------------------splice 万能公式 的删减和增加有点奇怪---------------------------*/
//我认为索引是从1开始数数的

//数组的万能公式 splice 
console.log(Array(30).fill('-').join(''));
 arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];    //同一个变量不能用arr反复赋值
arr.splice(2,3,'a','b');//[ 'Microsoft', 'Apple', 'a', 'b', 'Oracle' ]
console.log(arr);  //从第二个索引开始删除3个元素，再添加'a','b'
arr.splice(2,2);//[ 'Microsoft', 'Apple', 'Oracle' ]
console.log(arr);//从第二个索引开始删除2个元素
arr.splice(2,0,'ok','like');//[ 'Microsoft', 'Apple', 'ok', 'like', 'Oracle' ]
console.log(arr);//从第二个索引开始删除0个元素，再增加两个元素
arr.splice(3,0,'w','e','r');
console.log(arr);
 
//把两个数组连接再一起组成一个新的元素 concat
let arr1 = arr.concat([1,2,3]);
console.log(arr1);

//用字符串把数组连接在一起  join
let arr2 = arr.join('-');
console.log(arr2);
let arr3 = arr1.join('*');
console.log(arr3);




//多维数组

 arr = [[1, 2, 3], [400, 500, 600], '-'];
console.log(arr);











