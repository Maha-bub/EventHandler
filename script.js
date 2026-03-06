// ontion 2: add onclick function

function makeRed() {
  document.body.style.backgroundColor = "red";
}
const makeBlueButton = document.getElementById("makeBlue");


makeBlueButton.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};
