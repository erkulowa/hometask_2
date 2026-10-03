

let btn = document.querySelector("#btn");
let coins = document.querySelector("#coins h1");
let energy = document.querySelector("#energy h2");

btn.addEventListener("click", function () {

    if (Number(energy.textContent) > 0) {

        coins.textContent = Number(coins.textContent) + 10;
        energy.textContent = Number(energy.textContent) - 10;

    }

});