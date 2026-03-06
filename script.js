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
// option-4

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option-4 another one(function declared inside the add even lisener)

const makeGreen = document.getElementById("make-green");
makeGreen.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});
