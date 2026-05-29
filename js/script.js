"use strict";

// --- PRODUKT SEKTION ---

// Finder de HTML-elementer, der skal ændres med JavaScript
const productImage = document.getElementById("product-image");
const colorName = document.getElementById("color-name");
const productSection = document.getElementById("product");
const colorButtons = document.querySelectorAll(".color");

// Gemmer den valgte farve, så hover kan gå tilbage til brugerens valg
let selectedImage = "img/speakers (color)/moonlight-white.png";
let selectedColor = "Moonlight White";
let selectedGradient = "linear-gradient(90deg, #D9D9D9 0%, #F2F2F2 35%, #FBF9F7 70%)";

// Fjerner aktiv border fra alle farvecirkler
function removeActiveColor() {
    colorButtons.forEach(function(button) {
        button.classList.remove("active-color");
    });
}

// Genbrugelig funktion til farveskift
function chooseColor(button, image, name, gradient) {

    // Preview af farve ved hover
    button.onmouseenter = function () {
        productImage.src = image;
        colorName.textContent = name;
        productSection.style.background = gradient;
    };

    // Går tilbage til den sidst valgte farve
    button.onmouseleave = function () {
        productImage.src = selectedImage;
        colorName.textContent = selectedColor;
        productSection.style.background = selectedGradient;
    };

    // Gemmer farven, når brugeren klikker
    button.onclick = function () {
        removeActiveColor();

        button.classList.add("active-color");

        selectedImage = image;
        selectedColor = name;
        selectedGradient = gradient;

        productImage.src = image;
        colorName.textContent = name;
        productSection.style.background = gradient;
    };
}

// Farverne sættes ind i den genbrugelige funktion
chooseColor(document.getElementById("dusty-btn"), "img/speakers (color)/dusty-rose.png", "Dusty Rose", "linear-gradient(90deg, #E8C2CA 0%, #F7F3F0 35%, #FBF9F7 70%)");

chooseColor(document.getElementById("lavender-btn"), "img/speakers (color)/lavender-mist.png", "Lavender Mist", "linear-gradient(90deg, #B7B2D9 0%, #F1EEFF 35%, #FBF9F7 70%)");

chooseColor(document.getElementById("sage-btn"), "img/speakers (color)/sagegreen.png", "Sage Green", "linear-gradient(90deg, #CCD5AE 0%, #EEF2E3 35%, #FBF9F7 70%)");

chooseColor(document.getElementById("moonlight-btn"), "img/speakers (color)/moonlight-white.png", "Moonlight White", "linear-gradient(90deg, #D9D9D9 0%, #F2F2F2 35%, #FBF9F7 70%)");


// --- NEWSLETTER ---

const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {
    signupBtn.addEventListener("click", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;

        if (email !== "") {
            alert("Tak for din tilmelding!");
        } else {
            alert("Indtast din e-mailadresse.");
        }
    });
}