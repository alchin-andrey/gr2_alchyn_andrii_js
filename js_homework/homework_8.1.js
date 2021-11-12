/* 
Задача 8.1
Написать код, который будет выполнять 4 действия на странице index.html:
1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
4. Удалить все квадраты, и сделать фон страницы черным.
Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.
*/

document.body.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
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
        if (i % 3 - 2 === 0) {
            element[i].style.backgroundColor = 'red';
        } else {
            element[i].style.backgroundColor = 'yellow';
        }
    }
}

function create_night (element) {
    for(let i = element.length - 1;i >= 0;i--){
        element[i].remove();
    }
    document.body.style.backgroundColor = 'black';
}


let change_div = document.getElementsByTagName('div');
setTimeout(() => create_winter(10), 3000);
setTimeout(() => change_to_spring (change_div), 6000);
setTimeout(() => change_to_autumn (change_div), 9000);
setTimeout(() => create_night (change_div), 12000);


// create_winter(10);
// change_to_spring ();
// change_to_autumn ();
// create_night ();