const PI = 3.141592653589793; //Число ПИ
console.log('PI = ' + PI + ' (' + typeof(PI) + ');');

const COEFFICIENT_KM_TO_M = 1000; //Коэффициент преобразования единиц измерения километры в метры
const COEFFICIENT_INCH_TO_M = 0.0254; //Коэффициент преобразования единиц измерения дюймы в метры

let wheel_circumference_m = null; //Длинна окружности колеса в метрах
let number_of_turns_of_one_wheel = null; //Количество оборотов одного колеса
let number_of_turns_of_all_wheels = null; //Количество оборотов всех колес

let distance_km = prompt('Введите растояние (N), которое проехала машина в километрах: ', '0');
distance_km = Number(distance_km);
console.log('N = ' + distance_km + ' км.' + ' (' + typeof(distance_km) + ');');

let wheel_diameter_inch = prompt('Введите диаметр (D), колеса машины в дюймах: ', '0');
wheel_diameter_inch = Number(wheel_diameter_inch);
console.log('D = ' + wheel_diameter_inch + '"' + ' (' + typeof(wheel_diameter_inch) + ');');

let number_of_wheels = prompt('Введите количество колес у машины от 1 (Motoruota) до 24 (тягач "Целина"): ', '0');
number_of_wheels = Number(number_of_wheels);
console.log('D = ' + number_of_wheels + ' шт.' + ' (' + typeof(number_of_wheels) + ');');


let distance_m = distance_km * COEFFICIENT_KM_TO_M; //Растояние (N) в метрах
console.log('N = ' + distance_m + ' м.' + ' (' + typeof(distance_m) + ');');

let wheel_diameter_m = wheel_diameter_inch * COEFFICIENT_INCH_TO_M; //Диаметр колеса (D) в метрах
console.log('D = ' + wheel_diameter_m + ' м.' + ' (' + typeof(wheel_diameter_m) + ');');

wheel_circumference_m = PI * wheel_diameter_m; //Длинна окружности колеса в метрах
console.log('l = ' + wheel_circumference_m + ' м.' + ' (' + typeof(wheel_circumference_m) + ');');

number_of_turns_of_one_wheel = distance_m / wheel_circumference_m; //Количество оборотов одного колеса
console.log('n = ' + number_of_turns_of_one_wheel + ' об.' + ' (' + typeof(number_of_turns_of_one_wheel) + ');');

number_of_turns_of_all_wheels = number_of_turns_of_one_wheel * number_of_wheels; //Количество оборотов всех колес
console.log('n_общ. = ' + number_of_turns_of_all_wheels + ' об.' + ' (' + typeof(number_of_turns_of_all_wheels) + ');');


alert (`Количество оборотов одного колеса: ${number_of_turns_of_one_wheel.toFixed(2)} об. 
Количество оборотов всех колес (${number_of_wheels} шт.) = ${number_of_turns_of_all_wheels.toFixed(2)} об.`
);