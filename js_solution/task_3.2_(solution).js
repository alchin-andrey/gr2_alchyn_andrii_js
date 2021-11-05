/* 
Задача 3.2
Написать программу, которая должна за минимальное количество
попыток отгадать задуманное пользователем число от 0 до 100.
*/

const MAX_COUNT_ATTEMPT = 10;

let min = 0; // значение для минимального загаданого числа - "0"
let max = 100; // максимальное отгадываемое значение
let attempts = 0; // количество попыток
let result; // проверка угадываемого числа

do {
    let n = min + (max - min) / 2; // середина диапазона
    console.log(max, min, n);
    let answer = confirm(`Ваше число больше ${n}?`);
    attempts += 1; // счетчик попыток
    if (answer) {
        min = n;
    } else {
        max = n;
    }
    result = max - min < 1; // проверка угадываемого числа
} while (!result && attempts < MAX_COUNT_ATTEMPT);

let result2 = Math.round(min + (max - min) / 2); // Отгаданое число
alert(`Ваше число: ${result2}\nКоличество попыток: ${attempts}`); // минимальное количество попыток 6, максимальное - 7
