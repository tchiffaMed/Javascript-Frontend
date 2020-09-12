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


function pop() {
    const time = randomTime(200, 1000);
    const cube = randomcube(cubes);
    cube.classList.add('up');
    setTimeout(() => {
         cube.classList.remove('up');
    if (!timeUp) pop();
    }, time);
}

function startGame() {
    scoreBoard.textContent = '0';
    timeUp = false;
    score = 0;
 
    pop();
    setTimeout(() => timeUp = true, 20000)
}
function attrape(e) {
    if(!e.isTrusted) return ;
     score++;
        this.parentNode.classList.remove('up');
        scoreBoard.textContent = score;
    
}



lappins.forEach(lappin  => lappin.addEventListener('click', attrape));