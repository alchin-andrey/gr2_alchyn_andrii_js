let days = prompt('Введите число', '0');
days = Number(days);

if (isNaN(days) || 0 > days) {
    alert('Веденное значение не являеться положительным числом');
} else {
    let remainder_of_10 = days % 10;
    let remainder_of_100 = days % 100;
    if (4 < remainder_of_100 && remainder_of_100 < 21) {
        let days_text = 'дней.';
        alert(`${days} ${days_text}`);
    } else if (1 < remainder_of_10 && remainder_of_10 < 5) {
        let days_text = 'дня.';
        alert(`${days} ${days_text}`);
    } else if (remainder_of_10 == 1) {
        let days_text = 'день.';
        alert(`${days} ${days_text}`);
    } else {
        let days_text = 'дней.';
        alert(`${days} ${days_text}`);
    }
}





