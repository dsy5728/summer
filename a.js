//---------------------------- 面对对象编程 ----------------------------------//
//java c#中面对对象的两个概念
//类：类是对象的类型模板，例如，定义 student 类来表示学生，但是student不表示任何一个学生
//实列：实例是根据类创造的对象。例如，student类可以创造出xiaoming，xiaohuang d等多个对象
//每个实例都表示一个具体的对象，他们都属于student类

//但是JavaScript和他们不同，JavaScript不区分类和实例的概念。
//而是通过原型来实现面向对象编程

var Student = {
    name:'robot',
    age :18,
    run:function(){
        console.log(this.name+' is running');
    }
}

var xiaoming = {
    name:'小明'
}

xiaoming.__proto__ = Student;

console.log(xiaoming.name);
console.log(xiaoming.run());

//xiaoming有自己的name属性，但是他没有定义run（）
//不过由于xiaoming继承了Student，只要Student有run(),xiaoming也可以调用

//请注意，上述代码只是用于演示作用，在编写JavaScript时，不要直接用 obj.__proto__去改变一个对象的原型

//Object.creat()方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有

//编写一个函数来创建 xiaoming


// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    console.log(s);//创建了一个空的对象  {}
    // 初始化新对象:
    s.name = name;
    return s;
    
}

// var xiaoming = {
//     name:'小明'
// }

var xiaoming = createStudent('小明');

console.log(xiaoming.run());//小明 is running...
console.log(xiaoming.__proto__ === Student );//true

//这是创建原型继承的一种方法，JavaScript还有许多创建对象的方法

//------------------------------ 创建对象 --------------------------------//

//JavaScript对每个创造的对象都会设置一个原型，指向他的原型对象
//当我们用object.XXX访问一个对象的属性，js引擎先在对象上查找该属性，如果没找到，就会到原型上去找
//如果还是没找到，就会追溯到 object.prototype 对象上，最后如果没有找到就是undefined

// // 例如，创建一个Array对象：

// var arr = [1, 2, 3];

// // 其原型链是：

// arr ----> Array.prototype ----> Object.prototype ----> null

// Array.prototype定义了indexOf()、shift()等方法，因此你可以在所有的Array对象上直接调用这些方法。

function foo() {
    return 0;
}
// 函数也是一个对象，它的原型链是：

// foo ----> Function.prototype ----> Object.prototype ----> null

//通过构造函数来创建对象------------------------------

function student(name){
    this.name = name ;
    this.hello = function(){
        console.log('hello ,'+ this.name +'!');
    }

}
//这是一个普通函数，但是JavaScript中有一个关键字，‘ new ’
//如果不用new，他们就是普通函数。如果用来new，它就变成了一个构造函数，绑定的this指向新创建的对象，并且默认返回this，所以不用写return this



var xiaoming = new student('小明');//new 可以调用函数并且返回一个对象
console.log(xiaoming.name);// 小明
console.log(xiaoming.hello()); //hello ,小明！

var xiaohong = new student('小红');
console.log(xiaohong.name);// 小红
console.log(xiaohong.hello());//hello ,小红!

//用 new Student（）创建的对象，从原型获得了一的constructor属性，他指向函数本身

// console.log( xiaoming.constructor === student.prototype.constructor);//true
// console.log(student === student.prototype.constructor);//true

console.log(xiaoming.hello);//[Function]
console.log(xiaohong.hello);//[Function]

console.log(xiaoming.hello === xiaohong.hello);//false

//xiaoming 和 xiaohong 各自的hello是一个函数，但他们是两个不同的函数
//如果我们通过new student（） 创建了很多对象，如果这些对象的hello函数共享一个函数，就会节省很多的空间
//我们只需要把hello函数移到对象的共同原型上就可以了

function Stu(name){
    this.name = name;
}
Stu.prototype.goodbye = function(){
    console.log('Goodbye ,' +this.name +'!');
}

xiaoming = new Stu('小明');
console.log(xiaoming.goodbye());//Goodbye ,小明!

xiaohong = new Stu('小红');
console.log(xiaohong.goodbye());//Goodbye ,小红!

console.log(xiaohong.goodbye === xiaoming.goodbye);//true


//忘记写 new 怎么办 ----------------------------------
// 可以使用 creatStudent()


//---------------------------------- 原型继承 ----------------------------------------------------//
//在传统的基于Class的语言如 Java 和 c# 继承的本质是扩展一个已经有的class(类) ,生成一个新的 Subclass(子类)
// 但是JavaScript是采用原型继承我们无法直接扩展一个class

//回顾 Student 构造函数

function Student(props){
    this.props = props.name || 'unnames';
}

// Student.prototype.hello = function(){
//     console.log('hello,'+this.props+'!');
// }

//我们要基于Student 扩展出 primaryStudent , 可以先定义出一个 primaryStudent() 函数

function PrimaryStudent(props){
    //调用 Student 构造函数，绑定this变量
    // Student.call(this, props);       //这里的 this 由于被 call 绑定 ，指向了Student
    this.grade = props.grade || 1;    
}
//但是调用了Student() 不等于继承了 Student ,
// PrimaryStudent创建的对象的原型是：
// new PrimaryStudent() ----> PrimaryStudent.prototype ----> Object.prototype ----> null
// 必须想办法把原型链修改为：
// new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null
//借助一个中间对象来实现原型链

function F(){

}
F.prototype = Student.prototype ;//把 F 的原型指向Student 的原型

PrimaryStudent.prototype = new F();// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:

PrimaryStudent.prototype.constructor = PrimaryStudent;// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:

PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};
// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
xiaoming.name; // '小明'
xiaoming.grade; // 2

// 验证原型:
xiaoming.__proto__ === PrimaryStudent.prototype; // true
xiaoming.__proto__.__proto__ === Student.prototype; // true


//-------------------------------- class继承 ---------------------------------------------------//
//新的关键字 class 从 ES6  开始正式引入 JavaScript。class的目的就是让定义类更加简单

// 回顾定义 class 的方法

function aStudent(name) {
    this.name = name|| 'dsy';
}

aStudent.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
}

//如果用 class 关键字来编写一个 secStudent
class secStudent  {
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log('Hello, ' + this.name + '!');
    }

}
var dsy = new secStudent('dsy');
console.log(dsy.hello());//Hello, dsy!

// class继承 -----------------------------
//现在原型继承的中间对象，原型对象的构造函数，都不需要考虑了。

//直接通过 extends 来实现
//thirdStudent

class aPrimaryStudent extends secStudent(){
    constructor(name,grade){
        super(name); // 记得用super调用父类的构造方法!  不好意思我真的不记得。。。。
        this.grade = grade;
    }
    myGrade() {
        alert('I am at grade ' + this.grade);
    }


}
