/* 
Задача 5.1
Напишите функцию random(min, max), которая будет возвращать случае целое число от min до max.
*/

function random(min, max) {
    function check_param(param) {
        return typeof param !== "number";
    }
    if (check_param(min) || check_param(max)) {
        return null;
    }
    let result = 0;
    let temp = Math.random();
    
    result = min + (max - min) * temp;
    result = Math.floor(result);

    return result;
}
let a = random(5, 40);
console.log(a);
