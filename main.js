// Canvas
const canvas = document.getElementById('canvas');

// Red slider
const inputR = document.getElementById('red');

// Green slider
const inputG = document.getElementById('green');

// Blue slider
const inputB = document.getElementById('blue');

// Text indicators
const textR = document.getElementById('textR');
const textG = document.getElementById('textG');
const textB = document.getElementById('textB');
const rgb = document.getElementById('rgb');

// RGB
let red = 127;
let green = 127;
let blue = 127;

// Sliders
inputR.addEventListener('input', (e) => {
    red = e.target.value;
    textR.textContent = `R (${e.target.value})`
    canvas.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

inputG.addEventListener('input', (e) => {
    green = e.target.value;
    textG.textContent = `G (${e.target.value})`
    canvas.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

inputB.addEventListener('input', (e) => {
    blue = e.target.value;
    textB.textContent = `B (${e.target.value})`
    canvas.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

window.addEventListener('input', () => {
    rgb.textContent = `rgb(${red}, ${green}, ${blue})`;
});