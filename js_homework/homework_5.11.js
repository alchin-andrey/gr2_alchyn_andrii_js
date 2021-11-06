/* 
Задача 5.11
Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.
*/

function get_max(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let result = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element > result) {
            result = element;
        }
    }
    return result;
}

let array = [11, 25, -25, 65, 125];
let result = get_max(array);
console.log(result);