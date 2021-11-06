/* 
Задача 4.3
Необходимо написать функцию, которая принимает слово в виде строки, 
функция будет возвращать слово с буквами в обратном порядке, 
например в функцию передаем слово “ТЕЛЕФОН”, на выходе имеем слово «НОФЕЛЕТ».
*/

function invert_and_to_upper_case(string) {
    if (typeof string !== 'string') {
        return null;
    }
    let result = '';
    let array = string.split('');
    let array2 = [];
    for (let i = array.length - 1; i > -1; i = i - 1) {
        array2.push(array[i].toUpperCase());
    }
    result = array2.join('');
    return result;
}
let human_word = prompt('Введите слово для зеркального отображения');
let res = invert_and_to_upper_case(human_word);
console.log(res);