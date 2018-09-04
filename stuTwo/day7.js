//同步 ---------------- 按顺序执行
function func1(){
    console.log('Call func1!');
}
function func2(){
    console.log('Call func2!');
}
function syncStatement(){
    func1();
    func2();
}
syncStatement();

//异步
function asyncStatement(){
    setTimeout(()=>{
            console.log('async');
    }, 1000)
    console.log('async1');
}
asyncStatement();//异步代码必须在同步代码执行完之后再执行

// JavaScript 是天生异步的 ------------------------ 并行

//axios


//Array.from()