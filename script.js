const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");
const colorPicker = document.getElementById("colorPicker");

function updateColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    const hex = `#${parseInt(r).toString(16).padStart(2, '0')}${parseInt(g).toString(16).padStart(2, '0')}${parseInt(b).toString(16).padStart(2, '0')}`;
    
    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex;
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;
    colorPicker.value = hex;
}

function updateFromInput() {
    red.value = redInput.value;
    green.value = greenInput.value;
    blue.value = blueInput.value;
    updateColor();
}

function updateFromPicker() {
    const hex = colorPicker.value;
    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex;

    red.value = parseInt(hex.substring(1, 3), 16);
    green.value = parseInt(hex.substring(3, 5), 16);
    blue.value = parseInt(hex.substring(5, 7), 16);
    redInput.value = red.value;
    greenInput.value = green.value;
    blueInput.value = blue.value;
}

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);
redInput.addEventListener("input", updateFromInput);
greenInput.addEventListener("input", updateFromInput);
blueInput.addEventListener("input", updateFromInput);
colorPicker.addEventListener("input", updateFromPicker);

updateColor();
