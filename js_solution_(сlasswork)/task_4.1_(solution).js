/* 
Задача 4.1
Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.
*/

function get_min(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let result = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        console.log(i, element, result);
        if (element < result) {
            result = element;
        }
    } return result;
}

let array = [1, 2, 3, 5, 5, 10]; 
let result = get_min(array);
console.log(result);