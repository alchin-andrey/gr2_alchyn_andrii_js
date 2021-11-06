/* 
Задача 5.6
Напишите функцию truncate(str, maxlength), которая проверяет длину строки str, 
и если она превосходит maxlength – заменяет конец str на "...", 
так чтобы ее длина стала равна maxlength.
*/


function truncate(str, maxiength) {
    let result = str;
    if (str.length > maxiength) {
        let temp = str.slice(0, maxiength - 3);
        result = `${temp}...`;
    }
    return result;
}
let a = truncate('csqfdwqecewcewcw', 6);
console.log(a);

