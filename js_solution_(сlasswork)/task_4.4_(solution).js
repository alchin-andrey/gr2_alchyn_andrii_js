/* 
Задача 4.4
Необходимо написать мини-игру «Города». Нужно бесконечно запрашивать у пользователя ввод города. 
Проверять если последняя буква предыдущего слова совпадает с первой буквой следующего слова – засчитываем +1 очко. 
Если не совпадает выдаем сообщение «Игра окончена. Ваши очки: {кол-во очков}».
*/

function start_game_city_chain(start_city = 'Киев') {
    if (typeof start_city !== 'string') {
        return null;
    }

    alert(`Игра началась. Первый город ${start_city}`);

    let result = 0;
    let previos_cities = [];
    add_to_previos_cities(start_city, previos_cities);

    function add_to_previos_cities(city) {
        previos_cities.push(city.toLowerCase());
    }

    while (true) {
        let newCity = prompt('Введите город');
        newCity = newCity.toLowerCase();

        if (previos_cities.indexOf(newCity) !== -1) {
            alert('Такой город уже вводился');
            continue;
        }

        let prevCity = previos_cities[previos_cities.length - 1];
        let lastChar = prevCity[prevCity.length - 1];
        let firstChar = newCity[0];
        if (lastChar === 'ь' || lastChar === 'ы') {
            lastChar = prevCity[prevCity.length - 2];
        }
        firstChar = firstChar.toLowerCase();

        if (lastChar === firstChar) {
            result++;
        } else {
            alert(`Игра окончена. Ваши очки: ${result}`);
            return result;
        }

        add_to_previos_cities(newCity);
    }
    return result;
}

start_game_city_chain();
