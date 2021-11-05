/* 
Задача 5.10
Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.
*/

function get_random(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let result;
    let random_index = Math.round(Math.random() * arr.length);
    result = arr[random_index];
    return result;
}
let array = [11, 25, -25, 65, 125];
let result = get_random(array);
console.log(result);