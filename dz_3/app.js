
let inns = ["01212201212345", "11212201212345", "21212201212345", "11212201212345", "11212201212345", "01212201212345", "21212201212345"];

let women = 0;
let men = 0;
let companies = 0;

for (let i = 0; i < inns.length; i++) {
    if (inns[i][0] === "0") {
        companies++;
    } else if (inns[i][0] === "1") {
        women++;
    } else if (inns[i][0] === "2") {
        men++;
    }
}

console.log("Женщины:", women);
console.log("Мужчины:", men);
console.log("Компании:", companies);



let cards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];

let cardVisa = 0;

for (let i = 0; i < cards.length; i++) {
    if (cards[i][0] === "4") {
        cardVisa++;
    }
}

console.log("Карт VISA " + cardVisa + " из " + cards.length);



let numbers = [0, 3, 0, 12, 5, 0, 1];

let result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
        result.push(numbers[i]);
    }
}

console.log(result);


let points = [10, 8, 6, 8, 9, 3, 7, 8];

let resultPoints = [];

for (let i = 0; i < points.length; i++) {
    if (points[i] >= 9) {
        resultPoints.push(5);
    } else if (points[i] >= 7) {
        resultPoints.push(4);
    } else if (points[i] >= 5) {
        resultPoints.push(3);
    } else if (points[i] >= 3) {
        resultPoints.push(2);
    } else if (points[i] >= 1) {
        resultPoints.push(1);
    }
}

console.log(resultPoints);