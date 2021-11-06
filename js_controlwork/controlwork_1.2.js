/* 
Задача 1.2
Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
*/

function filter_array_and_create_new(arr, filter_arr) {
    if (!Array.isArray(arr) || !Array.isArray(filter_arr)) {
        return null;
    }
    let result = [];
    let filter_element;
    for (let i = 0; i < arr.length; i++) {
        result.push (arr[i]);
    }
    for (let i = 0; i < filter_arr.length; i++) {
        filter_element = filter_arr[i];
        let index = result.indexOf(filter_element);
        while (index !== -1) {
            result.splice(index, 1);
            index = result.indexOf(filter_element);
        }
    }
    return result;
}
let array_1 = [11, 25, -25, 65, 125];
let array_2 = [11, 25];
let result = filter_array_and_create_new(array_1, array_2);
console.log(result);