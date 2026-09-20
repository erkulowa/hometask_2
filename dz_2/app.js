let number = Number(prompt("Введите номер планеты:"));

if (number === 1) {
    alert("Меркурий");
} else if (number === 2) {
    alert("Венера");
} else if (number === 3) {
    alert("Земля");
} else if (number === 4) {
    alert("Марс");
} else if (number === 5) {
    alert("Юпитер");
} else if (number === 6) {
    alert("Сатурн");
} else if (number === 7) {
    alert("Уран");
} else if (number === 8) {
    alert("Нептун");
} else if (number === 9) {
    alert("Плутон");
} else {
    alert("Такой планеты нет!");
}


let temperature = Number(prompt("Введите температуру:"));

if (temperature < -10) {
    alert("Mорозно");
} else if (temperature >= -10 && temperature < 0) {
    alert("Очень холодно");
} else if (temperature >= 0 && temperature <= 10) {
    alert("Холодно");
} else if (temperature >= 11 && temperature <= 20) {
    alert("Прохладно");
} else if (temperature >= 21 && temperature <= 25) {
    alert("Облачно");
} else if (temperature >= 26 && temperature <= 32) {
    alert("Тепло");
} else if (temperature >= 33) {
    alert("Жарко");
} else {
    alert("Введите корректную температуру!");
}


let region = prompt("Введите код региона:");

switch (region) {
    case "01":
        alert("Бишкек");
        break;
    case "02":
        alert("Ош");
        break;
    case "03":
        alert("Баткен");
        break;
    case "04":
        alert("Джалал-Абад");
        break;
    case "05":
        alert("Нарын");
        break;
    case "06":
        alert("Ошская область");
        break;
    case "07":
        alert("Талас");
        break;
    case "08":
        alert("Чуй");
        break;
    case "09":
        alert("Иссык-Куль");
        break;
    default:
        alert("Такого региона нет!");
}


let amount = Number(prompt("Введите сумму:"));
let currency = prompt("Введите валюту (USD, EUR, RUB, CNY):");

let rate;
let result;

switch (currency) {
    case "USD":
        rate = 87.80;
        result = Math.round(amount / rate);
        alert(`Курс: ${rate}, Сумма: ${result} USD`);
        break;
    case "EUR":
        rate = 101;
        result = Math.round(amount / rate);
        alert(`Курс: ${rate}, Сумма: ${result} EUR`);
        break;
    case "RUB":
        rate = 1.000;
        result = Math.round(amount / rate);
        alert(`Курс: ${rate}, Сумма: ${result} RUB`);
        break;
    case "CNY":
        rate = 14.00;
        result = Math.round(amount / rate);
        alert(`Курс: ${rate}, Сумма: ${result} CNY`);
        break;
    default:
        alert("Такой валюты нет!");
}
