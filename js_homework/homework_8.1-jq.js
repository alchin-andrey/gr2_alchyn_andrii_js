/* 
Задача 8.1 (jQuery)
Написать код, который будет выполнять 5 действия на странице index.html:
1. Создать 100 квадратов голубого цвета размером 70*70 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
3. Вывести на каждом квадрате его порядковый номер.
4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки и любые 5 сделать желтым.
5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.
*/

$(document).ready(function(){

    $('div').remove();
    $('body').removeAttr('style');

    $('body').css ({
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    'min-height': '100vh'
    });

    setTimeout(() => {
        for (let i = 0;i < 100;i++){
            let new_elems = $('<div style="min-width: 70px; min-height: 70px; margin: 2px; background-color: deepskyblue;"></div>');
            document.body.prepend(new_elems[0]);
        }
    }, 2000);

    setTimeout(() => $('div').css ({
            'min-width': '100px', 
            'min-height': '100px',
            'max-height': '100px',
            'background-color': 'blueviolet',
        }), 4000);

    setTimeout(() => {
        $('div').css ({
        'font-size': '28px',
        'color': 'white',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
    });
    $('div').each(function(i) {
        $(this).prepend(i + 1);
    });
    }, 6000);

    setTimeout(() =>  {
        $('div').each(function(i) {
            if ((i + 1) % 15 === 0) {
                $(this).css({
                'background-color': '',
                'background': 'linear-gradient(to right bottom, transparent 49%, rgb(99, 114, 72) 50%) left / 50.25% 100% no-repeat, linear-gradient(to left bottom, transparent 49%, rgb(99, 114, 72) 50%) right / 50.25% 100% no-repeat',
                'font-size': '28px',
                });
            } else if ((i + 1) % 3 === 0) {
                $(this).css('background-color', 'crimson');
            }
        });
        let number_of_figures = 0;
        let div_for_change = $('div');
        let arr_of_figures = [];
        while(number_of_figures < 5) {
            i = Math.floor(Math.random() * div_for_change.length);
            if ((i + 1) % 3 !== 0 && (i + 1) % 15 !== 0 && arr_of_figures.indexOf(i) === -1) {
                div_for_change.eq(i).css({
                    'background-color': 'gold',
                    'color': 'black',
                    });
                number_of_figures ++
                arr_of_figures.push(i);
                console.log (`Перекраска в желтый (№ фигуры): ${i+1}`);
            }
        }
    }, 8000);

    setTimeout(() => {
        for(let i = $('div').length - 1;i >= 0;i--){
            if ((i + 1) % 3 === 0 && (i + 1) % 15 !== 0) {
                $('div')[i].remove();
            }
        };
    }, 10000);
});



// setTimeout отдельно

// $(document).ready(function(){

//     $('div').remove();
//     $('body').removeAttr('style');

//     $('body').css ({
//     'display': 'flex',
//     'flex-direction': 'column',
//     'align-items': 'center',
//     'justify-content': 'center',
//     'min-height': '100vh'
//     });

//     function create_winter (number) {
//         for (let i = 0;i < number;i++){
//             let new_elems = $('<div style="min-width: 70px; min-height: 70px; margin: 2px; background-color: deepskyblue;"></div>');
//             document.body.prepend(new_elems[0]);
//         }
//     }

//     function change_to_spring () {  
//         $('div').css ({
//             'min-width': '100px', 
//             'min-height': '100px',
//             'max-height': '100px',
//             'background-color': 'blueviolet',
//         })
//     }

//     function get_numb () {
//         $('div').css ({
//         'font-size': '28px',
//         'color': 'white',
//         'display': 'flex',
//         'align-items': 'center',
//         'justify-content': 'center',
//     });
//     $('div').each(function(i) {
//         $(this).prepend(i + 1);
//     });
//     }

//     function change_to_autumn () {
//         $('div').each(function(i) {
//             if ((i + 1) % 15 === 0) {
//                 $(this).css({
//                 'background-color': '',
//                 'background': 'linear-gradient(to right bottom, transparent 49%, rgb(99, 114, 72) 50%) left / 50.25% 100% no-repeat, linear-gradient(to left bottom, transparent 49%, rgb(99, 114, 72) 50%) right / 50.25% 100% no-repeat',
//                 'font-size': '28px',
//                 });
//             } else if ((i + 1) % 3 === 0) {
//                 $(this).css('background-color', 'crimson');
//             }
//         });
//         let number_of_figures = 0;
//         let arr_of_figures = [];
//         while(number_of_figures < 5) {
//             i = Math.floor(Math.random() * $('div').length);
//             if ((i + 1) % 3 !== 0 && (i + 1) % 15 !== 0 && arr_of_figures.indexOf(i) === -1) {
//                 $('div').eq(i).css({
//                     'background-color': 'gold',
//                     'color': 'black',
//                     });
//                 number_of_figures ++
//                 arr_of_figures.push(i);
//                 console.log (`Перекраска в желтый (№ фигуры): ${i+1}`);
//             }
//         }
//     }

//     function create_night () {
//         for(let i = $('div').length - 1;i >= 0;i--){
//             if ((i + 1) % 3 === 0 && (i + 1) % 15 !== 0) {
//                 $('div')[i].remove();
//             }
//         };
//     }

// let div_for_change = $('div');
// setTimeout(() => create_winter(100), 2000);
// setTimeout(() => change_to_spring (), 4000);
// setTimeout(() => get_numb  (), 6000);
// setTimeout(() => change_to_autumn (), 8000);
// setTimeout(() => create_night (), 10000);

// // create_winter(100);
// // change_to_spring (div_for_change);
// // get_numb (div_for_change);
// // change_to_autumn (div_for_change);
// // create_night (div_for_change);

// });
