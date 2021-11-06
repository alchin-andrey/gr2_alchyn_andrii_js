/* 
Контрольная задача 1.1
Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
*/


// Вариант №1
function isSameArrays(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return null;
    }
    let result = true;
    if (array1.length !== array2.length) {
        result = false;
        return result;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            result = false;
            return result;
        } 
    }
    result = true;
    return result;
}

// Вариант №2
function isSameArrays(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return null;
    }
    let result;
    let i = array1.length
    if (i !== array2.length) {
        result = false;
        return result;
    }
    while (i--) {
        console.log(i, array1[i], array2[i]);
        if (array1[i] !== array2[i]) {
        result = false;
        return result;
        }
    }
    result = true;
    return result;
}


// Общие данные и результат
let arr1 = [11, 25, -25, 65, 125];
let arr2 = [11, 25, -25, 65, 125];

let result = isSameArrays(arr1, arr2);
console.log(result);
