/* 
Задача 5.2
Написать функцию count_symbol( symbol, string ), 
которая подсчитает количество указанного символа symbol, в строке string. 
Функция должна быть регистронезависимой и вернуть число
*/

function count_symbol(symbol, string) {
    if (typeof symbol !== 'string' || typeof string !== 'string') {
        return null;
    }
    let result = 0;
    string = string.toLowerCase();
    symbol = symbol.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (symbol === string[i]) {
            result++;
        }
    }
    return result;
}
let word = 'иВАНОв';
let letter = 'В';
let result = count_symbol(letter, word);
console.log(result);
