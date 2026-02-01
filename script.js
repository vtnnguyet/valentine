const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gif = document.getElementById('questionGif');
const fireworks = document.getElementById('fireworks');

let noClicks = 0;
let yesSize = 18; // starting font size in px

yesBtn.addEventListener('click', () => {
    gif.src = 'fireworks.gif'; // show fireworks gif
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    
});

noBtn.addEventListener('click', () => {
    noClicks++;
    if (noClicks === 1) {
        gif.src = 'valentine.gif' + new Date().getTime();
        noBtn.textContent = "You sure?";
        yesSize += 5;
        yesBtn.style.fontSize = yesSize + "px";
    } else if (noClicks === 2) {
        noBtn.textContent = "Really sure?";
        yesSize += 5;
        yesBtn.style.fontSize = yesSize + "px";
    } else {
        yesSize += 5;
        noBtn.textContent ="Try again :(";
        yesBtn.style.fontSize = yesSize + "px";
    }
});
