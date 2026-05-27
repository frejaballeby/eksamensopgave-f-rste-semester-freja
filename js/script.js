"use strict"

const productImage = document.getElementById("product-image");
const colorName = document.getElementById("color-name");

document.getElementById("dusty-btn").onclick = function () {
    productImage.src = "img/dusty-rose.png";
    colorName.textContent = "Dusty Rose";
};

document.getElementById("lavender-btn").onclick = function () {
    productImage.src = "img/lavender-mist.png";
    colorName.textContent = "Lavender Mist";
};

document.getElementById("sage-btn").onclick = function () {
    productImage.src = "img/sagegreen.png";
    colorName.textContent = "Sage Green";
};

document.getElementById("moonlight-btn").onclick = function () {
    productImage.src = "img/moonlight-white.png";
    colorName.textContent = "Moonlight White";
};

// Border om farvecirkler //

const colorButtons = document.querySelectorAll(".color");

function removeActiveColor() {
    colorButtons.forEach(button => {
        button.classList.remove("active-color");
    });

// Dusty Rose border //
}
document.getElementById("dusty-btn").onclick = function () {

    removeActiveColor();

    document.getElementById("dusty-btn")
        .classList.add("active-color");

    productImage.src = "img/dusty-rose.png";
    colorName.textContent = "Dusty Rose";
};

// Lavender Mist border //
document.getElementById("lavender-btn").onclick = function () {

    removeActiveColor();

    document.getElementById("lavender-btn")
        .classList.add("active-color");

    productImage.src = "img/lavender-mist.png";
    colorName.textContent = "Lavender Mist";
};

// Sage Green border //

document.getElementById("sage-btn").onclick = function () {

    removeActiveColor();

    document.getElementById("sage-btn")
        .classList.add("active-color");

    productImage.src = "img/sagegreen.png";
    colorName.textContent = "Sage Green";
};

// Moonlight White //

document.getElementById("moonlight-btn").onclick = function () {

    removeActiveColor();

    document.getElementById("moonlight-btn")
        .classList.add("active-color");

    productImage.src = "img/moonlight-white.png";
    colorName.textContent = "Moonlight White";
};


// Finder tilmeld-knappen
const signupBtn = document.getElementById("signupBtn");

// Når brugeren klikker på knappen
signupBtn.addEventListener("click", function(event) {

    // Forhindrer siden i at genindlæse
    event.preventDefault();

    // Henter værdien fra inputfeltet
    const email = document.getElementById("email").value;

    // Tjekker om brugeren har skrevet noget
    if (email !== "") {
        alert("Tak for din tilmelding!");
    } else {
        alert("Indtast din e-mailadresse.");
    }

});