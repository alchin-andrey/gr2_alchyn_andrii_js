/* 
Задача 1.1
Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
*/

function compare_of_arrays(arr_1, arr_2) {
    if (!Array.isArray(arr_1) ||  !Array.isArray(arr_2)) {
        return null;
    }
    let result;
    if (arr_1.length !== arr_2.length) {
        result = false;
        return result;
    }
    let element_1;
    let element_2;
    for (let i = 0; i < arr_1.length && i < arr_2.length; i++) {
        element_1 = arr_1[i];
        element_2 = arr_2[i];
        if (element_1 !== element_2) {
            result = false;
            return result;
        } 
    }
    result = true;
    return result;
}
let array_1 = [11, 25, -25, 65, 125];
let array_2 = [11, 25, -25, 65, 125];

let result = compare_of_arrays(array_1, array_2);
console.log(result);