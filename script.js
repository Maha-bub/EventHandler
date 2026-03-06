// ontion 2: add onclick function

function makeRed() {
  document.body.style.backgroundColor = "red";
}
// option-3 (version-1)
const makeBlueButton = document.getElementById("makeBlue");
makeBlueButton.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};
