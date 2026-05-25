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