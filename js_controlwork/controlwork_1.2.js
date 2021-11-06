/* 
Задача 1.2
Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
*/

function sort_array_and_create_new(arr_1, arr_2) {
    if (!Array.isArray(arr_1) || !Array.isArray(arr_2)) {
        return null;
    }
    let result = [];
    let element;
    for (let i = 0; i < arr_1.length; i++) {
        result.push (arr_1[i]);
    }
    for (let i = 0; i < arr_2.length; i++) {
        result.push (arr_2[i]);
    }
    for (let i = 0; i < arr_2.length; i++) {
        element = arr_2[i];
        let index = result.indexOf(element);
        while (index !== -1) {
            result.splice(index, 1);
            index = result.indexOf(element);
        }
        result = result.filter(function (result_element){
            return result_element !== arr_2;
        });
    }
    return result;
}
let array_1 = [11, 25, -25, 65, 125];
let array_2 = [11, 25];
let result = sort_array_and_create_new(array_1, array_2);
console.log(result);