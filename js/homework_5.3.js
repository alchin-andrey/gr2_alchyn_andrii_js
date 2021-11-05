/* 
Задача 5.3
Напишите функцию get_string_length(str), 
которая в качестве аргумента принимает строку str и возвращает её длину, 
предварительно удалив из строки все пробелы (для решения данной задачи обязательно использовать цикл).
*/

function get_string_length(str) {
    if (typeof str !== 'string') {
        return null;
    }
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result++;
        }
    }
    return result;
}
let sentence = 'Потолочный лампо сос';
let result = get_string_length(sentence);
console.log(result);
