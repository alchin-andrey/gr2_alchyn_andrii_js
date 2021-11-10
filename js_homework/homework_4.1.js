/* 
Задача 4.1
Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.
*/


//Вариант №1
let arr = [25, 665, 758, -18, 22, -381, 92];
console.log(get_min(arr));

function get_min(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}

//Вариант №2
let arr_2 = [25, 665, -758, -18, 22, -381, 92];
let min = arr_2[0];

arr_2.forEach(function get_min_2(item) {
        if (min > item) min = item;
    });
console.log(min);
