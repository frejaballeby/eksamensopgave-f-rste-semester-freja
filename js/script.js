"use strict";


// Finder produktbillede
const productImage =
    document.getElementById("product-image");


// Finder farvenavn
const colorName =
    document.getElementById("color-name");


// Finder området rundt om højtaleren
const speakerWrapper =
    document.querySelector(".speaker-wrapper");


// Finder alle farvecirkler
const colorButtons =
    document.querySelectorAll(".color");


// Gemmer den valgte farve
let selectedImage =
    "img/speakers (color)/dusty-rose.png";

let selectedColor =
    "Dusty Rose";

let selectedGradient =
    "linear-gradient(135deg, #E8C2CA, #F7F3F0)";


// Fjerner aktiv border fra alle farvecirkler
function removeActiveColor() {

    colorButtons.forEach(button => {

        button.classList.remove("active-color");

    });

}


// Funktion til farveskift
function chooseColor(
    button,
    image,
    name,
    gradient
) {

    // Når musen føres over farvecirklen
    button.onmouseenter = function () {

        productImage.src = image;

        colorName.textContent = name;

     speakerWrapper.style.setProperty(
    "--speaker-gradient",
    gradient
);


    // Når musen fjernes igen
    button.onmouseleave = function () {

        productImage.src = selectedImage;

        colorName.textContent = selectedColor;

        speakerWrapper.style.background =
            selectedGradient;

    };


    // Når brugeren klikker på farven
    button.onclick = function () {

        removeActiveColor();

        button.classList.add("active-color");

        // Gemmer den valgte farve
        selectedImage = image;

        selectedColor = name;

        selectedGradient = gradient;

        // Opdaterer produktvisningen
        productImage.src = image;

        colorName.textContent = name;

        speakerWrapper.style.background =
            gradient;

    };

}


/* -----------------------------
   Dusty Rose
----------------------------- */

chooseColor(

    document.getElementById("dusty-btn"),

    "img/speakers (color)/dusty-rose.png",

    "Dusty Rose",

    "linear-gradient(135deg, #E8C2CA, #F7F3F0)"

);


/* -----------------------------
   Lavender Mist
----------------------------- */

chooseColor(

    document.getElementById("lavender-btn"),

    "img/speakers (color)/lavender-mist.png",

    "Lavender Mist",

    "linear-gradient(135deg, #B7B2D9, #F1EEFF)"

);


/* -----------------------------
   Sage Green
----------------------------- */

chooseColor(

    document.getElementById("sage-btn"),

    "img/speakers (color)/sagegreen.png",

    "Sage Green",

    "linear-gradient(135deg, #CCD5AE, #EEF2E3)"

);


/* -----------------------------
   Moonlight White
----------------------------- */

chooseColor(

    document.getElementById("moonlight-btn"),

    "img/speakers (color)/moonlight-white.png",

    "Moonlight White",

    "linear-gradient(135deg, #F7F3F0, #FFFFFF)"

);


/* -----------------------------
   Newsletter tilmelding
----------------------------- */


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