/* 
/* 
Задача 5.1
Напишите функцию random(min, max), которая будет возвращать случае целое число от min до max.
*/

function random(min, max) {
    function check_param(param) {
        return typeof (param) !== 'number';
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

let min_number = 11;
let max_number = 59;
let random_number = random(min_number, max_number);
console.log(random_number);
