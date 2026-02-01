const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const fireworks = document.getElementById('fireworks');

let yesSize=20;

noBtn.Btn.addEventListener("click", () => {
    yesSize +=10;
    yesBtn.style.fontSize = yesSize + "px";
});

yesBtn.addEventListener("click", () => {
    fireworks.style.display = "block";
});