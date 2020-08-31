import { parseExpression } from "@babel/parser";

const holes = document.querySelectorAll('.hole');
const scorreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.MOLE');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);

}
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.lenght);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(()  => {
        hole.classList.remove('up');
        if(!timeUp) peep();

    }, time);
}

function startGame() {
    scorreBoard.textContent = 0 ;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(()  =>  timeUp = true, 1000)
}

function bonk(e) {
    if(!e.isTrusted) return; //triche
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent =  score;
}

moles.foreEach(mole => mole.addEventListener('clisck, bonk'));
