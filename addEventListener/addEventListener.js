const button = document.getElementById("myButton");
button.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  console.log("Button Clicked");
}

//clickevent
document.getElementById("clickButton").addEventListener("click", function () {
  alert("button clicked");
});

//mouseover
document
  .getElementById("moveArea")
  .addEventListener("mousemove", function (event) {
    console.log(`mouse coordinate - X: ${event.clientX}, Y: ${event.clientY}`);
  });

const keyInput = document.getElementById("keyInput");

// key input
keyInput.addEventListener("keydown", function () {
  console.log("key pressed down");
});
keyInput.addEventListener("keyup", () => {
  console.log("key released");
});

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");
});

document.getElementById("keyPress").addEventListener("keypress", () => {
  console.log("key pressed");
});

const input = document.getElementById("input");
const output = document.getElementById("output");
//event change
input.onchange = () => {
  output.textContent = `value changed to ${input.value}`;
};

//focus change
const focusBlur = document.getElementById("focusArea");

focusBlur.addEventListener("focus", function () {
  console.log("this text is focused");
});

focusBlur.addEventListener("blur", function () {
  console.log("this text blured");
});

window.addEventListener("load", () => {
  console.log("all is well");
});

window.addEventListener("resize", () => {
  console.log("window resize");
});

window.addEventListener("scroll", () => {
  console.log("window scrolled");
});
