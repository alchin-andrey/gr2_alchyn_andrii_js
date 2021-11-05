/* 
Задача 5.7
Напишите функцию get_type_file( file_name ), 
которая получает расширение файла в заданном имени файла file_name 
(пример: get_type_file("readme.txt"), функция должна вернуть ".txt")
*/

function get_type_file(file_name) {
    if (typeof file_name !== 'string') {
        return null;
    }

    let result;
    let index_dot = file_name.indexOf('.');
    result = file_name.slice(index_dot, file_name.length);
    return result;
}
let file = 'script.js';
let result = get_type_file(file);
console.log(result);
