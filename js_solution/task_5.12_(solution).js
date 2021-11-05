/* 
Задача 5.12
Напишите функцию get_uniq_arr( arr ), которая удаляет из заданного массива arr элементы, которые дублируются (необходимо использовать цикл)
*/


function checkUniqueArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let nextlndexElement = i + 1;
        let index = arr.indexOf(element, nextlndexElement);
        // console.log('before', element, arr);
        while (index > 0) {
            result = false;
            arr.splice(index, 1);
            index = arr.indexOf(element, nextlndexElement);
        }
        // console.log('after', element, arr);
    }
    return result;
}
let array = [1, 3, 4, 6, 3, 1, 4, 1, 1, 3];
let check = checkUniqueArr(array);
console.log(check, array);
