/* 
Задача 4.2
Создайте массив с четными числами в диапазоне от 500 до 888 включительно.
*/

let array = [];

let min = 500;
let max = 888;
let n = 2;

// Вариант №1 (более правильный)


for (let i = min; i <= max; i ++) {
        if (i % n === 0) {
        array.push(i);
    }
}

console.log(array);
