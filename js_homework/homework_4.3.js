/* 
Задача 4.3
Необходимо написать функцию, которая принимает слово в виде строки, 
функция будет возвращать слово с буквами в обратном порядке, 
например в функцию передаем слово “ТЕЛЕФОН”, на выходе имеем слово «НОФЕЛЕТ».
*/
function wordReverse () {
    let array = word.split('');
    array.reverse();
    array = array.join('');
    return array;
}

let word = prompt('Введите слово: ');
wordReverse (word);
alert(wordReverse ());


// let word = 'ТЕЛЕФОН';
// let array = word.split('');
// array.reverse();
// array = array.join('');
// console.log(array);