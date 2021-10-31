/* 
Задача 3.2
Написать программу, которая должна за минимальное количество
попыток отгадать задуманное пользователем число от 0 до 100.
*/

const MAX_ATTEMPTS = 10;

let min = -1; // значение для минимального загаданого числа - "0"
let max = 100; // максимальное отгадываемое значение
let attempts = 0; // количество попыток
let verification = 0; // проверка угадываемого числа

do {
    let middle = Math.round(min + (max - min) / 2); // середина диапазона
    console.log(max, min, middle);
    let answer = confirm (`Ваше число больше ${middle}?`);
    if (answer) {
        min = middle;
    } else {
        max = middle;
    }
    attempts += 1; // счетчик попыток
    verification = (max - min) < 2; // проверка угадываемого числа
} while (!verification && attempts < MAX_ATTEMPTS);

let result = Math.round(min + (max - min) / 2); // Отгаданое число
alert (`Ваше число: ${result}
Количество попыток: ${attempts}`); // минимальное количество попыток 6, максимальное - 7


