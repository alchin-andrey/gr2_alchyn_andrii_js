/* 
Задача 2.1
Ввести с помощью функции prompt любое число и вывести в уведомление в таком формате:
1 день
2 дня
5 дней
17 дней
35 дней
1532 дня.
*/

// Вариант №1
let days = prompt('Введите количество дней: ', '0');
days = Number(days);

if (isNaN(days)) {
    console.error(`Дней: ${days} (${typeof(days)}).`);
    alert('Веденное значение не являеться числом');
} else {
    let result = '';

    let mod10 = Math.abs(days % 10);
    let mod100 = Math.abs(days % 100);

    if (mod100 >10 && mod100 < 20) {
        result = 'дней.';
    } else if (mod10 === 1) {
        result = 'день.';
    } else if (mod10 >= 2 && mod10 <= 4) {
        result = 'дня.';
    } else {
        result = 'дней.';
    }
    alert(`${days} ${result}`);
}

// Вариант №2
let days2 = prompt('Введите количество дней: ', '0');
days2 = Number(days2);

if (isNaN(days2)) {
    console.error(`Дней: ${days2} (${typeof(days2)}).`);
    alert('Веденное значение не являеться числом');
} else {
    let result = '';

    let mod10 = Math.abs(days2 % 10);
    let mod100 = Math.abs(days2 % 100);

    if (mod100 >10 && mod100 < 20) {
        result = 'дней.';
    } else {
        switch (mod10) {
            case 1: result = 'день.'; break;
            case 2:
            case 3:
            case 4: result = 'дня.'; break;
            default: result = 'дней.'; break;
        }
    }
    alert(`${days2} ${result}`);
}
