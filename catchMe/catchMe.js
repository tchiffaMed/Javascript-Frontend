const cubes = document.querySelectorAll('.cube');
const scoreBoard = document.querySelector('.score');
const lappins = document.querySelectorAll('.lappin');
let lastcube;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomcube(cubes) {
    const idx = Math.floor(Math.random() * cubes.length);
    const cube = cubes[idx];
    if (cube === lastcube) {
        // console.log('existe ...')
        return randomcube(cubes);
    }
    lastcube = cube;
    return cube;
}


function poop() {
    const time = randomTime(900, 1000);
    const cube = randomcube(cubes);
    cube.classList.add('up');
    setTimeout(() => {
         cube.classList.remove('up');
    if (!timeUp) poop();
    }, time);
}

function startGame() {
    scoreBoard.textContent = '0';
    timeUp = false;
    score = 0;
 
    poop();
    setTimeout(() => timeUp = true, 20000)
}


function attrape(e) {
    if(!e.isTrusted) return ;
     score++;
        e.target.parentNode.classList.remove('up');
        scoreBoard.textContent = score;
 console.log(this);
 console.log
}

 
lappins.forEach(fr  => fr.addEventListener('click', attrape)); 

