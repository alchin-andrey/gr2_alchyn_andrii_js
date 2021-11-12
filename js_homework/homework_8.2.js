/* 
Задача 8.2
Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.
*/

document.body.style.cssText = `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const COLORES = [
    'black', 
    'coral', 
    'crimson', 
    'gold', 
    'indigo', 
    'khaki', 
    'chocolate', 
    'green', 
    'grey', 
    'slateblue', 
    'tomato', 
    'teal', 
    'violet', 
    'yellowgreen', 
    'purple'
];

let COLORES_RUS = [
    'Чернее чернейшей черноты бесконечности', 
    'Коралловый', 
    'Малиновый', 
    'Золотой', 
    'Индиго', 
    'Хаки', 
    'Шоколад', 
    'Зелёный', 
    'Серый', 
    'Сланцево-синий', 
    'Помидорный', 
    'Бирюзовый', 
    'Фиолетовый', 
    'Зелёно-желтый', 
    'Пурпурный'
];

function get_random_size(min, max) {
    function check_param(param) {
        return typeof (param) !== 'number';
    }
    if (check_param(min) || check_param(max)) {
        return null;
    }
    let result = 0;
    let temp = Math.random();
    
    result = min + (max - min) * temp;
    result = Math.floor(result);

    return result;
}

function get_random_color(colors_arr) {
    if (!Array.isArray(colors_arr)) {
        return null;
    }
    let і = Math.floor(Math.random(colors_arr) * colors_arr.length);
    result = colors_arr[і];
    return result;
}

function create_rectangles (number) {
    for(let i = 0;i < number;i++){
        let new_div = document.createElement('div');
        let width_rectangle = get_random_size(150, 300);
        let height_rectangle = get_random_size(50, 150);
        let background_color_rectangle = get_random_color(COLORES);
        new_div.style.cssText = `
            width: ${width_rectangle}px; 
            height: ${height_rectangle}px; 
            margin: 25px; 
            background-color: ${background_color_rectangle};
        `;
        document.body.prepend(new_div);
    }
}

function show_rectangles_size_after_hover (element) {
    for(let i = 0;i < element.length;i++){
        element[i].addEventListener("mouseenter", function(event) {
            let number_of_rectangle = `№${i + 1}`;
            let width_of_rectangle = `w=${element[i].style.width}`;
            let height_of_rectangle = `h=${element[i].style.height}`;
            console.log(`Цвет прямоугольника ${number_of_rectangle}: ${width_of_rectangle} X ${height_of_rectangle}`);
        });
    }
}

function find_rus_color (color) {
    for(let i = 0;i < COLORES.length;i++){
        let color_index;
        if (COLORES[i] === color) {
            color_index = i;
            let result = COLORES_RUS[color_index];
            return result;
        }
    }
}

function  show_rectangles_color_after_click (element) {
    for(let i = 0;i < element.length;i++){
        element[i].addEventListener("click", function(event) {
            let number_of_rectangle = `№${i + 1}`;
            let color_of_rectangle = element[i].style.backgroundColor;
            let rus_color_of_rectangle =find_rus_color (color_of_rectangle);
            alert(`Цвет прямоугольника ${number_of_rectangle}: ${rus_color_of_rectangle}`);
        });
    }
}

create_rectangles (2);
let block_for_mouse = document.getElementsByTagName('div');
show_rectangles_size_after_hover (block_for_mouse);
show_rectangles_color_after_click (block_for_mouse);

