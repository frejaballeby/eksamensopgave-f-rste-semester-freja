"use strict";

// --- PRODUKT SEKTION ---

// Finder produktbillede i HTML så det senere kan ændres

const productImage =
    document.getElementById("product-image");


// Finder teksten hvor der står farvenavn, fx "Dusty Rose"

const colorName =
    document.getElementById("color-name");


// Finder hele produktsektionen

const productSection =
    document.getElementById("product");


// Finder alle farvecirkler

const colorButtons =
    document.querySelectorAll(".color");


// Når siden starter, er Moonlight White valgt
// let bruges, fordi værdierne skal kunne ændre sig, når brugeren klikker på en ny farve.

let selectedImage =
    "img/speakers (color)/moonlight-white.png";

let selectedColor =
    "Moonlight White";

let selectedGradient =
    "linear-gradient(90deg, #D9D9D9 0%, #F2F2F2 35%, #FBF9F7 70%)";


// Fjerner aktiv border fra alle farvecirkler, så ikke der er border om flere farver på samme tid.

function removeActiveColor() {

    colorButtons.forEach(button => {

        button.classList.remove("active-color");

    });

}

// Genbrugelig funktion til farveskift. Bruges til at opdatere højtaler, tekst og baggrund.

function chooseColor(
    button,
    image,
    name,
    gradient
) {


// Hover: når musen føres over farvecirklen, previewes farven

button.onmouseenter = function () {

productImage.src = image;

    colorName.textContent = name;
    productSection.style.background = gradient;

    };


// Mouseleave: Når musen fjernes igen, går siden tilbage til den sidste farve der blev klikket på

button.onmouseleave = function () {

    productImage.src = selectedImage;

    colorName.textContent = selectedColor;
    productSection.style.background = selectedGradient;

    };


    // Click: Når brugeren klikker på farven
    button.onclick = function () {

    // Fjerner border fra alle cirkler
        removeActiveColor();

    // Tilføjer border til den cirkel, der klikkes på
        button.classList.add("active-color");

        // Gemmer den nye valgte farve
        selectedImage = image;

        selectedColor = name;

        selectedGradient = gradient;

        // Opdaterer produktvisningen: Viser den valgte højtaler, tekst og baggrund på siden.
        productImage.src = image;

        colorName.textContent = name;

        productSection.style.background =
            gradient;

    };

}
// Funktionen chooseColor() bruges til hvert enkel farve
// Funktionen ER lavet, men her bliver der fyldt værdier ind i den.


// Dusty Rose

chooseColor(

    document.getElementById("dusty-btn"),

    "img/speakers (color)/dusty-rose.png",

    "Dusty Rose",

    "linear-gradient(90deg, #E8C2CA 0%, #F7F3F0 35%, #FBF9F7 70%)"

);


// Lavender Mist

chooseColor(

    document.getElementById("lavender-btn"),

    "img/speakers (color)/lavender-mist.png",

    "Lavender Mist",

    "linear-gradient(90deg, #B7B2D9 0%, #F1EEFF 35%, #FBF9F7 70%)"

);


// Sage Green

chooseColor(

    document.getElementById("sage-btn"),

    "img/speakers (color)/sagegreen.png",

    "Sage Green",

    "linear-gradient(90deg, #CCD5AE 0%, #EEF2E3 35%, #FBF9F7 70%)"

);


// Moonlight White

chooseColor(

    document.getElementById("moonlight-btn"),

    "img/speakers (color)/moonlight-white.png",

    "Moonlight White",

    "linear-gradient(90deg, #D9D9D9 0%, #F2F2F2 35%, #FBF9F7 70%)"

);


// --- NEWSLETTER TILMELDING ---


// Finder tilmeld-knappen
const signupBtn =
    document.getElementById("signupBtn");


// Tjekker om knappen findes
if (signupBtn) {

    // Når brugeren klikker på knappen
    signupBtn.addEventListener("click", function(event) {

        // Stopper siden i at reloade
        event.preventDefault();

        // Finder brugerens e-mail
        const email =
            document.getElementById("email").value;

        // Tjekker om feltet er udfyldt
        if (email !== "") {

            alert("Tak for din tilmelding!");

        } else {

            alert("Indtast din e-mailadresse.");

        }

    });

}