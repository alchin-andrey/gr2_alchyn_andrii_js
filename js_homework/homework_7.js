/* 
Задача 7
Ч1
С помощью функции-конструктора, написать создание объекта Калькулятор. 
Функция конструктор принимает в качестве единственного параметра название калькулятора.
Ч2
Объект калькулятор должен уметь выполнять такие действия: сложение, вычитаение, умножение и деление.
В действия сложение/умножение возможно передать произвольное количество слогаемых/множителей.
Действия вычитаение/деление принимают только 2 аргумента. Первый параметр вычитаемое/делимое, второй параметр вычитатель/делитель.
Ч3
Калькулятор должен хранить историю действий в виде строки в таком формате: Имя калькулятора (Дата Время): действие, результат, (параметры).
Например после действия сумма в истории должна появится такая запись: "Мой калькулятор (8.11.2021 20:30): сумма = 10, (5, 5)"
Калькулятор должен уметь вывести историю действий в консоль и уметь очищать историю действий.
ps: делайте задание по частям

*/

function Сreate_calculator(calculator_name) {
    this.name = calculator_name || 'Мой калькулятор';
    this.history = [];
    
    function not_number(number) {
        return isNaN(number);
    }

    function convert_to_number(array) {
        array.forEach((item, index) => {
            array[index] = Number(array[index]);
        });
        return array;
    }

    function get_date () {
        let now = new Date();

        let day = now.getDate();
        let month = now.getMonth() + 1;
        let year = now.getFullYear();
        let hours = now.getHours();
        let minutes = now.getMinutes();

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        let result = `${day}.${month}.${year} ${hours}:${minutes}`;
        return result;
    }

    this.to_add = function(...arg) {
        convert_to_number(arg);

        if (arg.some(not_number)) {
            return null;
        }
        let result = 0;
        arg.forEach((item) => {
            result += item;
        });
        let history_item = `${this.name} (${get_date()}): сумма = ${result}, (${arg.join(', ')})`;
        this.history.push(history_item);
        return result;
    }

    this.to_subtract = function(minuend, subtrahend) {
        let arg = [];
        arg.push(minuend, subtrahend);
        convert_to_number(arg);

        if (arg.some(not_number)) {
            return null;
        }
        let result = arg[0] - arg[1];
        let history_item = `${this.name} (${get_date()}): разность = ${result}, (${arg.join(', ')})`;
        this.history.push(history_item);
        return result;
    }

    this.multiply = function(...arg) {
        convert_to_number(arg);

        if (arg.some(not_number)) {
            return null;
        }
        let result = 1;
        arg.forEach((item) => {
            result *= item;
        });
        let history_item = `${this.name} (${get_date()}): произведение = ${result}, (${arg.join(', ')})`;
        this.history.push(history_item);
        return result;
    }

    this.divide = function(dividend, divisor) {
        let arg = [];
        arg.push(dividend, divisor);
        convert_to_number(arg);

        if (arg.some(not_number)) {
            return null;
        }
        let result = arg[0] / arg[1];
        let history_item = `${this.name} (${get_date()}): частное = ${result}, (${arg.join(', ')})`;
        this.history.push(history_item);
        return result;
    }

    this.cliar_history = function() {
        this.history = [];
        let result = `История калькулятора "${this.name}" очищена!`
        return result;
    }
}

let calc = new Сreate_calculator('Считака');
console.log(calc.to_add(1, 2, '6', 5));
console.log(calc.to_subtract(5, '2', '6', 5));
console.log(calc.multiply(1, '2', '6', 5));
console.log(calc.divide(4, '2', '6', 5));
console.log(calc.history);
console.log(calc.cliar_history());
console.log(calc.history);






























// let now = new Date();
// console.log(now);
// let day = now.getDate();
// console.log(day);
// let now2 = Date.now();
// console.log(now2);
// let day2 = getDate(1636581322159);
// console.log(day2);

// this.add = function(...arg) {
//     console.log(arg)
//     arg.forEach((item, index) => {
//         arg[index] = Number(arg[index]);
//         console.log(item, typeof(item));
//     });
//     console.log(arg);
//     console.log(arg.every(not_number));
//     console.log(arg.some(not_number));

// for (let i = 0; i < arg.length; i++) {
        //     arg[i] = Number(arg[i]);
        //     console.log(arg[i])
        //     }
        // console.log(arg)





