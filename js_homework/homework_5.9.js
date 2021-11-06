/* 
Задача 5.9
Напишите функцию get_order(string), которая отсортирует все слова в заданном предложении string в алфавитном порядке. 
Например: get_order("ноты акустика гитара"), функция должна вернуть "акустика гитара ноты"
*/

function get_order(string) {
    if (typeof string !== 'string') {
        return null;
    }

    let result;
    let string_array = string.split(' ');
    string_array.sort(); 
    result = string_array.join(' ');;
    return result;
}
let sentence = 'ноты акустика гитара';
let result = get_order(sentence);
console.log(result);