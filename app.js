const color1 = document.querySelector(".Color1");
const color2 = document.querySelector(".Color2");
const gradient = document.getElementById("Gradient");

const gradientSelector = () => {
    gradient.style.background = `linear-gradient(to right, ${color1.value},${color2.value})`
}

color1.addEventListener("input",gradientSelector);
color2.addEventListener("input",gradientSelector);