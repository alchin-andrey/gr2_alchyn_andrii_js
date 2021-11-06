/* 
Задача 4.4
Необходимо написать мини-игру «Города». Нужно бесконечно запрашивать у пользователя ввод города. 
Проверять если последняя буква предыдущего слова совпадает с первой буквой следующего слова – засчитываем +1 очко. 
Если не совпадает выдаем сообщение «Игра окончена. Ваши очки: {кол-во очков}».
*/

let attempts = 0; // количество попыток
let result;
let firstTown = prompt('Введите название города:'); // первый город
let secondTown = prompt('Введите следующее название города:'); // второй город

// console.log(gameTown ());

function find (elem) {
    return (elem !== 'ь' && elem !== 'ы' && elem !== 'ъ'); // исключить 
}

function gameTown () {
    let lastWord = firstTown.split('');
    lastWord = lastWord.filter (find);
    lastWord = lastWord.pop();
    let firstWord = secondTown.split('');
    firstWord = firstWord.shift();
    result = (lastWord === firstWord);
    return result;
}

if (!String(firstTown) || !String(secondTown)) {
    alert (`Веденные данные не являються городом! Вы проиграли.\nКоличество Ваших очков: ${attempts}`);
    } else {
        while (gameTown ()) {
        let nextTown = prompt('Введите следующее название города:');
        nextTown =  String(nextTown);
        if (!String(firstTown) || !String(nextTown)) {
        alert ('Веденные данные не являються городом! Вы проиграли.');
        } else {
        firstTown = secondTown;
        secondTown = nextTown;
        attempts ++;
        }
    }
} 

alert (`GAME OWER!\nКоличество Ваших очков: ${attempts}`);

