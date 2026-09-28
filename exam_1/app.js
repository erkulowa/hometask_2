
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(array) {
    let result = [];

    while (array.length > 0) {
        let randomIndex = getRandom(0, array.length - 1);

        let removed = array.splice(randomIndex, 1);

        result.push(removed[0]);
    }

    return result;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));
