var programming_languages = [
    "python",
    "javascript",
    "C++",
    "html",
    "css",
    "java",
    "ruby",
    "php",
    "rust"
]


let answer = '';
let maxWrong = 6;
let errors = 0;
let mistakes = document.getElementById('mistakes');
let trouvee =0;
let guessed = [];
wordStatus = null;


let refresh = document.getElementById('refresh');
let trouv = document.getElementById('trouvee');
let total = document.getElementById('total');
let devinette = document.getElementById('wordSpotlight');
let message = document.getElementById('message');
const canvas = document.getElementById('canvas');
let clav = document.getElementsByClassName('clav')

  
   

//choix aleatoire des mots dans l'array programming_languages

function randomWord(){
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];

    total.textContent = answer.length;
} 


//generer les keyboard splitter les 26 lettre avec du "vide" et les parcourir avec le map pour les inserer dans des boutons;
function generateButtons() {
    let buttonskeyBoard = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
        <button class="black-text grey-text keybao" id="` + letter + `" onClick="handleGuess('`+ letter +  `')" style = "box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 
        0 1px 5px 0 rgba(0, 0, 0, 0.2); background:white; width:30px; height:29px; border-radius:5px; border:none; margin:4px">
        `+ letter +  `
        </button>
`).join('');
document.getElementById('keyboard').innerHTML = buttonskeyBoard;

}


function handleGuess(choosenLetter){
    guessed.indexOf(choosenLetter) === -1 ? guessed.push(choosenLetter) : null;
    // document.getElementById(choosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(choosenLetter) >= 0) {
        trouvee++;
        guessWord();
        checkIfGamewon();
    } else if(answer.indexOf(choosenLetter) === -1){
        errors++;
        updateMistakes();
        checkIfGameLost();
        // updateHangmanPicture();
    }
}


//verification d'echec ou de triomphe

function checkIfGamewon(){
    if(wordStatus === answer){
        document.getElementById('keyboard').innerHTML ='';

        message.classList.remove('message');
        message.innerHTML = `
        <div class="DomMessage" style="background: rgba(172, 255, 47, 0.222); font-size:20px; width:190px; margin: 40px auto;border: #6eb405 1px solid;">
          <span class="" >Felicitation, </br> You Win !!</span>
        </div>`;
    }
}


function checkIfGameLost(){
    if(errors === maxWrong){
        document.getElementById('wordSpotlight').innerHTML = `<p>La bonne reponse est :  <strong >${answer}</strong> </p>`;
        document.getElementById('keyboard').innerHTML ='';

        message.classList.remove('message');
        message.innerHTML = `
        <div class="DomMessage" style="background: rgba(234, 47, 255, 0.201); font-size:20px; width:190px; margin: 40px auto;border: rgb(252, 47, 255) 1px solid;">
          <span class="" >You Lost !!</span>
        </div>`; 

    }
}

//Hangman Picture, Canvas

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 20, 20, 12, 13);

// updateHangmanPicture(){
//     document.getElementById('hangmanPic').src = './images/' + errors + '.jpg';
// }

//Affichage de la partie de saisoie du code à deviner
function guessWord(){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " . ")).join('');
    devinette.innerHTML = wordStatus;
    
}

//incrementation du compteiur d'erreur
function updateMistakes(){
    mistakes.innerHTML = errors;
}


document.getElementById('maxWrong').innerHTML = maxWrong;


//renitialisation 

refresh.addEventListener('click', reset);

function reset(){
//renitialisation
//   console(errors);
    errors = 0;
    mistakes.textContent = '0';
    guessed = [];

//appel des fonctions ...
    randomWord();
    generateButtons();
    guessWord();
    
  
    message.classList.add('message');
}

randomWord();
    generateButtons();
    guessWord();


