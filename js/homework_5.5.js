/* 
Задача 5.5
Напишите функцию search_string(search, string), 
которая будет проверять наличие подстроки search в строке string. 
Функция должна вернуть булев тип и быть регистронезависимой (использовать метод indexOf)
*/

function search_string(search, string) {
    if (typeof search !== "string" || typeof string !== "string") {
        return null;
    }
    let result = 0;
    string = string.toLowerCase();
    search = search.toLowerCase();
    check = string.indexOf(search);
    result = check > 0;
    return result;
}
let word = "Дорогу осилит идуЩий";
let substring = "щи";
let result = search_string(substring, word);
console.log(result);
