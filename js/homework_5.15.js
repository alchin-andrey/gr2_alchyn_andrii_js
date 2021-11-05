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

for (let kay in points) {
    sum_points = sum_points + points[kay];
    if (points[kay] < min_point) {
        min_point = points[kay];
        worst_student = `${kay}: ${points[kay]}`
    }
    if (points[kay] > max_point) {
        max_point = points[kay];
        best_student = `${kay}: ${points[kay]}`;
    }
}

console.log(
    `Сумма всех балов: ${sum_points} балов.
    \nЛучщий студент - ${best_student} балов.
    \nХудший студент - ${worst_student} балов.`
);
