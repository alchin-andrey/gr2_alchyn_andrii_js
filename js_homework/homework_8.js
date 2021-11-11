/* 
Задача 7
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
    for(let i=1;i<=number;i++){
        let newdiv = document.createElement('div');
        newdiv.style.cssText = ' width: 50px; height: 50px; margin: 5px; background-color: deepskyblue;';
        document.body.prepend(newdiv);
    }
}

function change_to_spring () {
    let change_div = document.getElementsByTagName('div');
    for(let i=0;i<=change_div.length;i++){
        console.log(change_div[i]);
        change_div[i].style.cssText = 'width: 100px; height: 100px; margin: 5px; background-color: seagreen;';
    }
}

function change_to_autumn () {
    let change_div = document.getElementsByTagName('div');
    for(let i=0;i<=change_div.length;i++){
        console.log(change_div[i]);
        if (i % 3 === 0) {
        change_div[i].style.cssText = `
        width: 100px;
        height: 100px;
        margin: 5px;
        background-color: red;
        `;
        } else {
            change_div[i].style.cssText = `
        width: 100px;
        height: 100px;
        margin: 5px;
        background-color: yellow;
        `;
        }
    }
}

create_winter(10);
change_to_spring ();
// change_to_autumn ();

// setTimeout(() => create_winter(10), 2000);
// setTimeout(() => change_to_spring (), 4000);



// create_winter(10)
// setTimeout(create_winter, 3000);