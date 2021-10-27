// Константы
const MY_DATE_OF_BIRTH = '18 марта 1988г.';
const MY_PLACE_OF_BIRTH = 'Украина, Донецкая одл., г. Горловка';
const MY_GENDER = 'мужской';
const MY_EYE_COLOR = 'голубой';
const MY_NAME = 'Андрей';
const MY_SURNAME = 'Алчин';
const MY_MIDDLE_NAME = 'Юрьевич';


// Переменные
let myAge = 33;
let myPlaceOfResidence = 'г. Краматорск';
let myPlaceOfWork = 'архитектурно-строительная компания';
let myJavaScriptSkill = 0.01;
let myGrade = null;





// Вывод
console.log('Приветствую! Сейчас я Вам поведаю немного о себе.')

// Константы
console.log('Дата рождения: ' + MY_DATE_OF_BIRTH + ' (' + typeof(MY_DATE_OF_BIRTH) + ');');
console.log('Место рождения: ' + MY_PLACE_OF_BIRTH + ' (' + typeof(MY_PLACE_OF_BIRTH) + ');');
console.log('Мой пол: ' + MY_GENDER + ' (' + typeof(MY_GENDER) + ');');
console.log('Мой цвет глаз: ' + MY_EYE_COLOR + ' (' + typeof(MY_EYE_COLOR) + ');');
console.log('Моё имя: ' + MY_NAME + ' (' + typeof(MY_NAME) + ');');
console.log('Моя фамилия: ' + MY_SURNAME + ' (' + typeof(MY_SURNAME) + ');');
console.log('Моё отчество: ' + MY_MIDDLE_NAME + ' (' + typeof(MY_MIDDLE_NAME) + ');');

// Переменные
console.log('Мой возраст: ' + myAge + ' (' + typeof(myAge) + ');');
console.log('Моё место жительства: ' + myPlaceOfResidence + ' (' + typeof(myPlaceOfResidence) + ');');
console.log('Моё место работы: ' + myPlaceOfWork + ' (' + typeof(myPlaceOfWork) + ');');
console.log('Мой скил в JavaScript на данный момент: ' + myJavaScriptSkill * 100 + '%' + ' (' + typeof(myJavaScriptSkill) + ');');
console.log('--------------------------------------------------------------');
console.log('Моя оценка за ДЗ: ' + myGrade + ' (' + typeof(myGrade) + ');');