// Константы
const MY_NAME = 'Андрей';
const MY_SURNAME = 'Алчин';
const MY_MIDDLE_NAME = 'Юрьевич';
const MY_DATE_OF_BIRTH = '18 марта 1988г.';
const MY_PLACE_OF_BIRTH = 'Украина, Донецкая одл., г. Горловка';
const MY_GENDER = 'мужской';
const MY_EYE_COLOR = 'озерный';
const STUDY_PATH_OF_MY_LIFE = Infinity;
const ME_AND_SMOKE = false;
const ME_AND_FOOD = true;

// Переменные
let myAge = 33;
let myPlaceOfResidence = 'г. Краматорск';
let myPlaceOfWork = 'архитектурно-строительная компания';
let myFavoriteSport = 'настольный-тенис, футбол';
let myWeight = 75;
let myHeight = 174;
let myJavaScriptSkill = 0.01;
let myGrade = undefined;
let myNumber = 9007199254740993n;
let myPassword = Symbol('****');

// Консоль
console.log('Приветствую! Сейчас я Вам поведаю немного о себе.')
console.log('--------------------------------------------------------------');
console.log('Моё имя: ' + MY_NAME + ' (' + typeof(MY_NAME) + ')' + ' [константа];');
console.log('Моя фамилия: ' + MY_SURNAME + ' (' + typeof(MY_SURNAME) + ')' + ' [константа];');
console.log('Моё отчество: ' + MY_MIDDLE_NAME + ' (' + typeof(MY_MIDDLE_NAME) + ')' + ' [константа];');
console.log('Дата рождения: ' + MY_DATE_OF_BIRTH + ' (' + typeof(MY_DATE_OF_BIRTH) + ')' + ' [константа];');
console.log('Место рождения: ' + MY_PLACE_OF_BIRTH + ' (' + typeof(MY_PLACE_OF_BIRTH) + ')' + ' [константа];');
console.log('Мой пол: ' + MY_GENDER + ' (' + typeof(MY_GENDER) + ')' + ' [константа];');
console.log('Мой возраст: ' + myAge + ' года' + ' (' + typeof(myAge) + ')' + ' [переменная];');
console.log('Мой вес: ' + myWeight + ' кг.' + ' (' + typeof(myWeight) + ')' + ' [переменная];');
console.log('Мой рост: ' + myHeight + ' см.' + ' (' + typeof(myHeight) + ')' + ' [переменная];');
console.log('Моё место жительства: ' + myPlaceOfResidence + ' (' + typeof(myPlaceOfResidence) + ')' + ' [переменная];');
console.log('Моё место работы: ' + myPlaceOfWork + ' (' + typeof(myPlaceOfWork) + ')' + ' [переменная];');
console.log('Цвет моих глаз: ' + MY_EYE_COLOR + ' (' + typeof(MY_EYE_COLOR) + ')' + ' [константа];');
console.log('Моё любимое число: ' + myNumber + ' (' + typeof(myNumber) + ')' + ' [переменная];');
console.log('Мой любимый пароль:', myPassword, '(' + typeof(myPassword) + ')' + ' [переменная];');
console.log('Я курю?: ' + ME_AND_SMOKE + ' (' + typeof(ME_AND_SMOKE) + ')' + ' [константа];');
console.log('Я вкушаю пищу?: ' + ME_AND_FOOD + ' (' + typeof(ME_AND_FOOD) + ')' + ' [константа];');
console.log('Мой любимый вид спорта: ' + myFavoriteSport + ' (' + typeof(myFavoriteSport) + ')' + ' [переменная];');
console.log('Мой скил в JavaScript на данный момент: ' + myJavaScriptSkill * 100 + '%' + ' (' + typeof(myJavaScriptSkill) + ')' + ' [переменная];');
console.log('Учебный путь моей жизни: ' + STUDY_PATH_OF_MY_LIFE + ' (' + typeof(STUDY_PATH_OF_MY_LIFE) + ')' + ' [константа];');
console.log('--------------------------------------------------------------');
console.warn('Моя оценка за ДЗ: ' + myGrade + ' (' + typeof(myGrade) + ')' + ' [переменная].');
