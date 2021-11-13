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

    function create_history_item(action, result, arg) {
        let name = calculator_name || 'Мой калькулятор';
        return `${name} (${get_date()}): ${action} = ${result}, (${arg.join(', ')})`;
    }

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
        let action = 'сумма';
        let history_item = create_history_item(action, result, arg);
        this.history.push(history_item);
        return `${action} = ${result}`;
    }

    this.to_subtract = function(minuend, subtrahend) {
        let arg = [];
        arg.push(minuend, subtrahend);
        convert_to_number(arg);

        if (arg.some(not_number)) {
            return null;
        }
        let result = arg[0] - arg[1];
        let action = 'разность';
        let history_item = create_history_item(action, result, arg);
        this.history.push(history_item);
        return `${action} = ${result}`;
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
        let action = 'произведение';
        let history_item = create_history_item(action, result, arg);
        this.history.push(history_item);
        return `${action} = ${result}`;
    }

    this.divide = function(dividend, divisor) {
        let arg = [];
        arg.push(dividend, divisor);
        convert_to_number(arg);

        if (arg.some(not_number)) {
            return null;
        }
        let result = arg[0] / arg[1];
        let action = 'частное';
        let history_item = create_history_item(action, result, arg);
        this.history.push(history_item);
        return `${action} = ${result}`;
    }

    this.get_history = function() {
        if (this.history.length === 0) {
            return `Истории калькулятора "${this.name}": ОТСУТСТВУЕТ!`;
        }
        console.log(`История калькулятора "${this.name}":`)
        for(let i = 0;i < this.history.length;i++){
            console.log(`${this.history[i]};`);
        };
        return `Конец истории калькулятора "${this.name}".`;
    }

    this.clear_history = function() {
        this.history = [];
        let result = `История калькулятора "${this.name}" ОЧИЩЕНА!`
        return result;
    }
}

let calc = new Сreate_calculator('Сейчас как поделю!');

// Обычная проверка
console.log(calc.to_add(1, 2, '6', 5));
console.log(calc.to_subtract(5, '2', '6', 5));
console.log(calc.multiply(1, '2', '6', 5));
console.log(calc.divide(4, '2', '6', 5));
console.log(calc.get_history());
console.log(calc.clear_history());
console.log(calc.get_history());

// Проверка по времени
setTimeout(() => console.log(calc.to_add(1, 2, '6', 5), calc.get_history()), 3000);
setTimeout(() => console.log(calc.to_subtract(5, '2', '6', 5), calc.get_history()), 20000);
setTimeout(() => console.log(calc.multiply(1, '2', '6', 5), calc.get_history()), 40000);
setTimeout(() => console.log(calc.divide(4, '2', '6', 5), calc.get_history()), 61000);
setTimeout(() => console.log(calc.clear_history(), calc.get_history()), 65000);
setTimeout(() => console.log(calc.divide(4, '2', '6', 5), calc.get_history()), 70000);
