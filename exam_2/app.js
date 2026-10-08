const numbers = document.querySelectorAll(".number");
const button = document.querySelector("button");

function generateOTP() {
    numbers[0].textContent = Math.floor(Math.random() * 10);
    numbers[1].textContent = Math.floor(Math.random() * 10);
    numbers[2].textContent = Math.floor(Math.random() * 10);
    numbers[3].textContent = Math.floor(Math.random() * 10);
}

button.onclick = generateOTP;

generateOTP();