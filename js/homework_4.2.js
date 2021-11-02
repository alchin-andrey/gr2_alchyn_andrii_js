/* 
Задача 4.2
Создайте массив с четными числами в диапазоне от 500 до 888 включительно.
*/

let x1 = 500;
let x2 = 888;

// Вариант №1 (более правильный)
console.log(evenArray());

function evenArray() {
    let array = [];
    for (let i = x1; i <= x2; i += 1) {
        if (i % 2 === 0) array.push(i);
    }
    return array;
}

// Вариант №2 (только начиная с четного, как в этой задаче)
console.log(evenArray2());

function evenArray2() {
    let array = [];
    for (let i = x1; i <= x2; i += 2) 
    array.push(i);
    return array; 
}