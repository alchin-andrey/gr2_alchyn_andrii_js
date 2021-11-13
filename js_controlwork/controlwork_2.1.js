/* 
Самостоятельная работа 2.1 (на основе задачи 8.1)
Написать код, который будет выполнять 5 действия на странице index.html:
1. Создать 1000 квадратов голубого цвета размером 70*70 пикселей, и распологает их горизонтально.
2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 10*10 пикселей.
3. Вывести на каждом квадрате его порядковый номер.
4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки.
5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.
*/

//Очистка страницы
function cline_body () {
    let _div = document.getElementsByTagName('div');
    for(let i = _div.length - 1;i >= 0;i--){
        _div[i].remove();
    }
}
cline_body ()

// Решение
document.body.style.cssText = `
    display: flex;
    `;

function create_winter (number) {
    for(let i = 0;i < number;i++){
        let new_div = document.createElement('div');
        new_div.style.cssText = `
        min-width: 70px; 
        min-height: 70px; 
        margin: 2px; 
        background-color: deepskyblue;
        `;
        document.body.prepend(new_div);
    }
}

function change_to_spring (element) {
    for(let i = 0;i < element.length;i++){
        element[i].style.cssText += `
        min-width: 10px; 
        min-height: 10px;
        max-height: 10px;
        background-color: blueviolet;
        `;
    }
}

function get_numb (element) {
    for(let i = 0;i < element.length;i++){
        element[i].style.cssText += `
        font-size: 7px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        `;
        element[i].innerText = `${i+1}`;
}
}

function change_to_autumn (element) {
    for(let i = 0;i < element.length;i++){
        if ((i % 15) - 14 === 0) {
            element[i].style.backgroundColor = '';
            element[i].style.cssText += `
            background: linear-gradient(to right bottom, transparent 50%, rgb(99, 114, 72) 50%) left / 50% 100% no-repeat, linear-gradient(to left bottom, transparent 50%, rgb(99, 114, 72) 50%) right / 50% 100% no-repeat;
            align-items: flex-end;
            font-size: 5px;
            `;
        } else if (i % 3 - 2 === 0) {
            element[i].style.backgroundColor = 'crimson';
        } else {    
            element[i].style.backgroundColor = 'gold';
            element[i].style.color = 'black';
        }
    }
}

function create_night (element) {
    for(let i = element.length - 1;i >= 0;i--){
        if ((i % 3) - 2 === 0 && (i % 15) - 14 !== 0) {
        element[i].remove();
    }
}
}

let div_for_change = document.getElementsByTagName('div');
setTimeout(() => create_winter(1000), 2000);
setTimeout(() => change_to_spring (div_for_change), 4000);
setTimeout(() => get_numb  (div_for_change), 6000);
setTimeout(() => change_to_autumn (div_for_change), 8000);
setTimeout(() => create_night (div_for_change), 10000);

// create_winter(1000);
// change_to_spring (div_for_change);
// get_numb (div_for_change);
// change_to_autumn (div_for_change);
// create_night (div_for_change);