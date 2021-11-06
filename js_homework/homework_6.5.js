/* 
Задача 6.5
Напишите функцию get_day(date), которая возвращает день недели от заданной даты. 
Например: get_day(’27-11-1988’) должно вернуть «воскресенье»
*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;
const MANTH_NAMES = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const DAY_NAMES = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

function get_day(date) {
    if (date instanceof Date) {
        let day_name = DAY_NAMES[date.getDay()];
        let result = day_name;
        return result;
    }
    return null;
}

let d1 = new Date('1988-11-27');
let result = get_day(d1);
console.log(result);