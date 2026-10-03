

function capitalizeString(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalizeString("ЕВГЕНИЙ")); 
console.log(capitalizeString("иВАНОВ")); 



function charCount(string, char) {
    let count = 0;

    string = string.toLowerCase();
    char = char.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }

    return count;
}

console.log(charCount("Abrakadabra", "a"));
console.log(charCount("hello", "z"));



function hidePhone(phone) {

    return phone.slice(0, -2) + "**";

}

console.log(hidePhone("+996 555 555 555"));



function evenOddSum(numbers) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            evenSum += numbers[i];
        } else {
            oddSum += numbers[i];
        }

    }

    return [evenSum, oddSum];
}

console.log(evenOddSum([50, 60, 60, 45, 71]));