/* 
Задача 8.1
Написать код, который будет выполнять 4 действия на странице index.html:
1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
4. Удалить все квадраты, и сделать фон страницы черным.
Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.
*/

//Очистка страницы
function cline_body () {
    let _div = document.getElementsByTagName('div');
    for(let i = _div.length - 1;i >= 0;i--){
        _div[i].remove();
    }
}
cline_body ()

//Решение
document.body.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height:100vh;
    `;

function create_winter (number) {
    for(let i = 0;i < number;i++){
        let new_div = document.createElement('div');
        new_div.style.cssText = `
        width: 50px; 
        height: 50px; 
        margin: 5px; 
        background-color: deepskyblue;
        `;
        document.body.prepend(new_div);
    }
}

function change_to_spring (element) {
    for(let i = 0;i < element.length;i++){
        element[i].style.cssText += `
        width: 100px; 
        height: 100px; 
        background-color: seagreen;
        `;
    }
}

function change_to_autumn (element) {
    for(let i = 0;i < element.length;i++){
        if ((i + 1) % 3 === 0) {
            element[i].style.backgroundColor = 'crimson';
        } else {
            element[i].style.backgroundColor = 'gold';
        }
    }
}

function create_night (element) {
    for(let i = element.length - 1;i >= 0;i--){
        element[i].remove();
    }
    document.body.style.backgroundColor = 'black';
}

let div_for_change = document.getElementsByTagName('div');
setTimeout(() => create_winter(10), 3000);
setTimeout(() => change_to_spring (div_for_change), 6000);
setTimeout(() => change_to_autumn (div_for_change), 9000);
setTimeout(() => create_night (div_for_change), 12000);


// create_winter(10);
// change_to_spring (div_for_change);
// change_to_autumn (div_for_change);
// create_night (div_for_change);