// Variables

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const body = document.querySelector("body");
const randomButton = document.querySelector(".random");
const cssMessage = document.querySelector("#message");
const hexCodes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "f"
];

//EventListener

input1.addEventListener("input", changeBodyColor);

input2.addEventListener("input", changeBodyColor);

randomButton.addEventListener("click" , applyRandomColor);

//Functions

function changeBodyColor() {
    body.style.background = `linear-gradient(90deg, ${input1.value}, ${input2.value})`;
    updateMessage()
}

//Message Function 

function updateMessage() {
    cssMessage.innerHTML = `linear-gradient(90deg, ${input1.value}, ${input2.value})`;
}

// Random Color Button 

function getRandomColor() {
    let randomColor = "#"

    while (randomColor.length < 7){
        randomColor += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return randomColor;
}

function applyRandomColor() {
    let firstRandom = getRandomColor();
    let secondRandom = getRandomColor();
  
    body.style.background = `linear-gradient(90deg, ${firstRandom}, ${secondRandom})`;
    input1.value = firstRandom;
    input2.value = secondRandom;
    updateMessage();
  }

  updateMessage();
  applyRandomColor();


