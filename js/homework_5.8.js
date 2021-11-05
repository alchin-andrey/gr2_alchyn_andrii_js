/* 
Задача 5.8
Напишите функцию get_short_fio(full_fio), 
которая преобразует полное ФИО full_fio в краткое. 
Например: get_short_fio("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."
*/

function get_short_fio(full_fio) {
    if (typeof full_fio !== 'string') {
        return null;
    }

    let result;
    let fio_array = full_fio.split(' ');
    if (fio_array.length !== 3) {
        return null;
    }
    let surname = fio_array[0];
    let first_letter_of_name = fio_array[1][0];
    let first_letter_of_middle_name = fio_array[2][0];
    result = `${surname} ${first_letter_of_name}.${first_letter_of_middle_name}.`;
    return result;
}
let fio = 'Иванов Сергей Петрович';
let result = get_short_fio(fio);
console.log(result);