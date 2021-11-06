/* 
Задача 5.12
Напишите функцию get_uniq_arr( arr ), которая удаляет из заданного массива arr элементы, которые дублируются (необходимо использовать цикл)
*/

function get_uniq_arr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let next_index_element = i + 1;
        let index = arr.indexOf(element, next_index_element);
        while (index > 0) {
            result = false;
            arr.splice(index, 1);
            index = arr.indexOf(element, next_index_element);
        }
    }
    return result;
}
let array = [5, 3, 4, 6, 5, 2, 4, 8, 2, 5];
let result = get_uniq_arr(array);
console.log(result, array);
