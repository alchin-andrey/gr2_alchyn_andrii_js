/* 
Задача 5.4
Напишите функцию up_first(str), которая возвращает строку str с заглавным первым символом, 
остальные символы должны быть в нижнем регистре (пример: up_first("иванов"), 
должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")
*/

function up_first(str) {
    if (typeof (str) !== 'string') {
        return null;
    }
    let result;
    let first_letter = str[0].toUpperCase();
    let other_letters = str.slice(1).toLowerCase();
    result = first_letter + other_letters;
    return result;
}
let word = 'иВАНОВ';
let result = up_first(word);
console.log(result);
