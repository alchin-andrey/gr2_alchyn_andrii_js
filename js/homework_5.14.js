/* 
Задача 5.14
Создайте функцию is_empty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
Например:
var schedule = {};
isEmpty(schedule) ; // должно вернуть true
schedule["8:30"] = "подъём";
isEmpty(schedule) ; //должно вернуть false
*/

function is_empty(obj) {
    if (typeof obj !== 'object') {
        return null;
    }
    let result;
    for (let key in obj) {
        result = false;
        return result;
    }
    result = true;
    return result;
}
let schedule = {};
schedule['8:30'] = 'подъём';
let result = is_empty(schedule);
console.log(result, typeof result);