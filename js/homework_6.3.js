/* 
Задача 6.3
Напишите функцию get_count_work_days(date1, date2), 
которая будет считать количество рабочих дней между двумя заданными датами.
*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;
const MANTH_NAMES = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const DAY_NAMES = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

function get_count_work_days(date1, date2) {
    if (date1 instanceof Date && date2 instanceof Date) {
        let diff_day = Math.floor((date2 - date1) / (MS_DAY) + 1);
        console.log(diff_day);
        let weeks = 0;
        for(i = 0; i < diff_day; i++){
            if (date1.getDay () == 0 || date1.getDay () == 6) {
                weeks ++;
            }
            date1 = date1.getTime() + MS_DAY;
            date1 = new Date(date1);
        }
        console.log(diff_day);
        let result = diff_day - weeks;
        return result;
    }
    return null;
}

let d1 = new Date('2021-11-1');
let d2 = new Date('2021-11-30');
let result = get_count_work_days(d1, d2);
console.log(result);