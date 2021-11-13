/* 
Задача 8.2
Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.
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
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    min-height:100vh;
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
    min = Number(min);
    max = Number(max);
    if (isNaN(min) || isNaN(max)) {
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

function create_rectangles (quantity) {
    quantity = Number(quantity);
    if (isNaN(quantity)) {
        return null;
    }
    let rectangle_colors = [];
    for(let i = 0;i < quantity;i++){
        let new_div = document.createElement('div');
        let width_of_rectangle = get_random_size(350, 500);
        let height_of_rectangle = get_random_size(100, 300);
        let background_color_of_rectangle = null;
        while (!background_color_of_rectangle) {
            let search_color = get_random_color(COLORES);
            if (rectangle_colors.indexOf(search_color) !== -1) {
                continue;
            }
            background_color_of_rectangle = search_color;
            rectangle_colors.push(background_color_of_rectangle);
        };
        new_div.style.cssText = `
            width: ${width_of_rectangle}px; 
            height: ${height_of_rectangle}px; 
            margin: 25px; 
            background-color: ${background_color_of_rectangle};
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
            console.log(`Размер прямоугольника ${number_of_rectangle}: ${width_of_rectangle} X ${height_of_rectangle}`);
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
            let rus_color_of_rectangle = find_rus_color (color_of_rectangle);
            alert(`Цвет прямоугольника ${number_of_rectangle}: ${rus_color_of_rectangle}`);
        });
    }
}

create_rectangles (2);
let block_for_mouse = document.getElementsByTagName('div');
show_rectangles_size_after_hover (block_for_mouse);
show_rectangles_color_after_click (block_for_mouse);