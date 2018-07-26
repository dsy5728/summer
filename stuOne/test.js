//date
// 补全下面函数

// 返回当前本地时间和时间戳字符串,格式按照下面代码所示

"use strict";

// Date
const getLocaleNowTimeStr = () => {
    var d =1531660411535;
    var now = new Date(d);
    var arr = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
    var showDay = arr[now.getDay()]
    console.log('localeTime=['+showDay+'/'+(now.getMonth()+1)+'月/'
                +now.getFullYear()+'年：'+now.getHours()+'时：'+now.getMinutes()+
                '分：'+now.getMinutes()+'秒]'+']',' timestamp=['+d+'毫米]' );
    
    
}
getLocaleNowTimeStr();


// 正则表达式和JSON

// 补全下面函数，函数接受一个待处理字符串,返回一个json字符串

// 从下面的toBeDealtStr模版字符串中提取出students数组,
// 按照给定序列化结果的格式序列化为JSON文本字符串。

// 正则表达式 和 JSON

//// 用 exec 做
const toBeDealtStr = `# some students data


// 注: [686]后面一定是数字 grade为1-4
'[name]=ly [age]=21    [grade]=2 [686]=999
'Motto---fighting......

'[name]=jxq [age]=22 [grade]=2     [686]=666
'Motto---To be able to eat is a blessing, ha ha...

'[name]=aGirl     [age]=21 [grade]=1 [686]=646
'Motto---em em em...

`
const dealStr = (toBeDealtStr) => {
    const pattern = /'\[name\]=(\w+?)\s+?\[age\]=(\d+?)\s+?\[grade\]=(\d)\s+?\[686\]=(\d+?)\n'Motto---(.+)/ig;
    let students = [];
    let execResult = null;
      while (execResult = pattern.exec(toBeDealtStr)) {
        let student = {
            name: execResult[1],
            age: execResult[2],
            grade: execResult[3],
            '溜不溜': execResult[4],
            'motto': execResult[5]
        }
        students.push(student);
    }

return JSON.stringify(students);


    // console.log(JSON.stringify(end1Array));
}
console.log(dealStr(toBeDealtStr));


//用 match 做

const toBeDealtStr2 = `# some students data


// 注: [686]后面一定是数字 grade为1-4
'[name]=ly [age]=21    [grade]=2 [686]=999
'Motto---fighting......

'[name]=jxq [age]=22 [grade]=2     [686]=666
'Motto---To be able to eat is a blessing, ha ha...

'[name]=aGirl     [age]=21 [grade]=1 [686]=646
'Motto---em em em...

`
const dealStr2 = (toBeDealtStr2) => {
    const pattern = /'\[name\]=(\w+?)\s+?\[age\]=(\d+?)\s+?\[grade\]=(\d)\s+?\[686\]=(\d+?)\n'Motto---(.+)/i;
    let students = [];
    let matchResult = null;
    // console.log(toBeDealtStr2.match(pattern));
    while (matchResult = toBeDealtStr2.match(pattern)){
        let student = {
            name: matchResult[1],
            age: matchResult[2],
            grade: matchResult[3],
            '溜不溜': matchResult[4],
            'motto': matchResult[5]

        }
        students.push(student);
    }
    return JSON.stringify(matchResult)


}
console.log(dealStr2(toBeDealtStr2));
