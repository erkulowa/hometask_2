
const numbers = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7];

const multiplied = numbers.map(number => number * 5);
console.log(multiplied);

const positive = numbers.filter(number => number > 0);
console.log(positive);


const names = ["алиса", "ЖЕНЯ", "артем", "ПАВЕЛ", "ЖАКШЫЛЫК", "антон", "айсулуу", "канаим"];

const capitalized = names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
console.log(capitalized);

const letterA = names.filter(name => name[0].toLowerCase() === "а");
console.log(letterA);