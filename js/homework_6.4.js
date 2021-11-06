/* 
Задача 6.4
Напишите функцию get_count_days(date) , 
которая будет считать количество дней до Нового года от date, если оно задано, 
иначе посчитать количество дней от текущей даты
*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;
const MANTH_NAMES = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const DAY_NAMES = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

function get_count_days(date) {
    date = date || new Date();

    if (date instanceof Date) {
        let next_year = String(new Date().getFullYear() + 1); // следующий год от текущей даты. Перевод в строку.
        let new_year = new Date(next_year);
        let ms_day_diff = new_year.getTime() - date.getTime();
        let result = Math.trunc(ms_day_diff / MS_DAY);
        return result;
    }
    return null;
}

let d1 = new Date('2021-12-31');
let result = get_count_days(d1);
console.log(`Дней до нового года: ${result}`);