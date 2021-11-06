/* 
Задача 6.1
Напишите функцию get_tomorrow(), которая возвращает завтрашнее число в формате 26 ноября 2019г
*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;
const MANTH_NAMES = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const DAY_NAMES = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

function get_tomorrow() {
    let d = new Date();
    let ms_result_date = d.getTime() + MS_DAY;
    let result_date = new Date(ms_result_date);

    let day_namber = result_date.getDate();
    let month_name = MANTH_NAMES[result_date.getMonth()];
    let year_namber = result_date.getFullYear();

    let result = `${day_namber} ${month_name} ${year_namber}г`;
    return result;

}

let result = get_tomorrow();
console.log(result);