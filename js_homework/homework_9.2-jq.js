/* 
Задача 9.2 (jQuery)
Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.
*/


$(document).ready(function(){

    $('div').remove();
    $('body').removeAttr('style');

    $('body').css ({
    'display': 'flex',
    'flex-direction': 'row',
    'align-items': 'center',
    'justify-content': 'space-evenly',
    'min-height': '100vh'
    });

    let new_rectangle_1 = $('<div style="width: 300px; height: 150px; margin: 25px; background-color: forestgreen;"></div>');
    document.body.prepend(new_rectangle_1[0]);
    let new_rectangle_2 = $('<div style="width: 500px; height: 250px; margin: 25px; background-color: orange;"></div>');
    document.body.prepend(new_rectangle_2[0]);

    let block_for_mouse = $('div');

    block_for_mouse.each(function(i) {
        $(this).on('mouseenter', function(event) {
            let number_of_rectangle = `№${i + 1}`;
            let width_of_rectangle = `w=${block_for_mouse.eq(i).width()}`;
            let height_of_rectangle = `h=${block_for_mouse.eq(i).height()}`;
            console.log(`Размер прямоугольника ${number_of_rectangle}: ${width_of_rectangle} X ${height_of_rectangle}`);
        });
    });

    $('div:first').on('click', function(event) {
        alert(`Цвет прямоугольника №1: Оранжевый`);
    });
    $('div:last').on('click', function(event) {
        alert(`Цвет прямоугольника №2: Зелёный`);
    });

});