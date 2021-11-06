/* 
Задача 5.15
Есть объект points с оценками. Напишите код, который выведет сумму всех оценок. 
var points = {
"Вася": 200,
"Петя": 300,
"Даша": 250,
"Андрей": 150,
"Сергей": 450,
};
Найти имена тех, кто получает минимальную и максимальную оценку.
*/

let points = {
    Вася: 200,
    Петя: 300,
    Даша: 250,
    Андрей: 150,
    Сергей: 450,
};

let sum_points = 0;
let worst_student;
let best_student;
let min_point = Infinity;
let max_point = -Infinity;

for (let key in points) {
    sum_points = sum_points + points[key];
    if (points[key] < min_point) {
        min_point = points[key];
        worst_student = `${key}: ${points[key]}`
    }
    if (points[key] > max_point) {
        max_point = points[key];
        best_student = `${key}: ${points[key]}`;
    }
}

console.log(
    `Сумма всех балов: ${sum_points} балов.
    \nЛучщий студент - ${best_student} балов.
    \nХудший студент - ${worst_student} балов.`
);
