/* 
Задача 1.2
Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
*/


// Вариант №1
function filterArrayBy(array, filterArray) {
    if (!Array.isArray(array) || !Array.isArray(filterArray)) {
        return null;
    }

    let result = array.map(function (arrayElement){
        return arrayElement;
    });

    for (let i = 0; i < filterArray.length; i++) {
        let filterElement = filterArray[i];
        
        let index = result.indexOf(filterElement);
        console.log(filterElement, index, (index !== -1));

        while (index !== -1) {
            result.splice(index, 1);
            index = result.indexOf(filterElement)
            console.log(result);
        }

    }
    return result;
}

// Вариант №2 (упрощение варианта №1)
function filterArrayBy(array, filterArray) {
    if (!Array.isArray(array) || !Array.isArray(filterArray)) {
        return null;
    }

    let result = array.map(arrayElement => arrayElement);

    for (let i = 0; i < filterArray.length; i++) {
        let filterElement = filterArray[i];
        
        let index = result.indexOf(filterElement);
        console.log(filterElement, index, (index !== -1));

        result = result.filter(function (resultElement){
            return resultElement !== filterElement;
        });
    }
    return result;
}

// Вариант №3 (самый простой)
function filterArrayBy(array, filterArray) {
    if (!Array.isArray(array) || !Array.isArray(filterArray)) {
        return null;
    }

    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (filterArray.indexOf(array[i]) === -1) {
            result.push(array[i]);
        }
    }
    return result;
}


// Общие данные и результат
let arr1 = [11, 25, -25, 65, 125];
let arr2 = [11, 25];

let result = filterArrayBy(arr1, arr2);
console.log(result);