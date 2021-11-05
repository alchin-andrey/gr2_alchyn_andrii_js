/* 
Задача 5.13
Задача на синтаксис объектов. Напишите код, по строке на каждое действие.
•  Создайте пустой объект user.
•  Добавьте свойство name со значением Вася.
•  Добавьте свойство surname со значением Петров.
•  Поменяйте значение name на Сергей.
•  Удалите свойство name из объекта.
*/

let user = {};
console.log(user);
user.name = 'Вася';
console.log(user);
user.surname = 'Петров';
console.log(user);
user.name = 'Сергей';
console.log(user);
delete user.name;
console.log(user);
