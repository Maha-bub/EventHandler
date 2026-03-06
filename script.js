// ontion 2: add onclick function

function makeRed() {
  document.body.style.backgroundColor = "red";
}
// option-3 (version-1)
const makeBlueButton = document.getElementById("makeBlue");
makeBlueButton.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// option-3 (version-2)
const purpleButton = document.getElementById("MakePurple");
purpleButton.onclick = function purpleButton() {
  document.body.style.backgroundColor = "purple";
};