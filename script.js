var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("btn");

function setGradient() {
    body.style.background = "linear-gradient(to right, " +  color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randomColor() {
    body.style.background = "#" + Math.floor(Math.random() * 123456789).toString(16);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor );

