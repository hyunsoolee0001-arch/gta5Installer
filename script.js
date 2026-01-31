const install = document.querySelector(`.download`);
const R = document.querySelector(`.R`);
const LM = document.querySelector(`.LM`)

install.addEventListener( `click`, () => {
    install.textContent = `설치중`;
})

R.addEventListener(`click`, () => {
    R.textContent = `GTA5 ★`;
})

LM.addEventListener(`click`, () => {
    LM.textContent = `Error`;
})

const right = document.querySelector(`.right`);

right.addEventListener(`click`, () => {
    right.textContent = `♬`;
    right.style.font.size = `60px`;
})

const myAudio = new Audio();
myAudio.src = `../week8/music1.mp3`

right.addEventListener(`click`, () => {
    right.disabled = true;
    myAudio.play();
})