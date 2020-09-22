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
let compteur = 0;


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

            let ctx = canvas.getContext('2d');
                ctx.lineWidth = 6;
function handleGuess(choosenLetter){
    guessed.indexOf(choosenLetter) === -1 ? guessed.push(choosenLetter) : null;
    // document.getElementById(choosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(choosenLetter) >= 0) {
        trouvee++;
        guessWord();
        checkIfGamewon();
        console.log(trouvee);
    } else if(answer.indexOf(choosenLetter) === -1){
        errors++;
        updateMistakes();
        checkIfGameLost();
        // updateHangmanPicture();
    }
    
    switch(errors){
        case 0:
        break;
        case 1:
            ctx.beginPath();
            ctx.strokeStyle = 'rgb(150,195,11)';
            ctx.moveTo(60,130);
            ctx.lineTo(243, 130);
            ctx.stroke();
        break;

        case 2:
            ctx.beginPath();
            ctx.strokeStyle = 'orange';
            ctx.moveTo(240, 20);
            ctx.lineTo(240, 130);
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = 'rgb(252,122,7)';
            ctx.moveTo(137, 20);
            ctx.lineTo(243, 20);
            ctx.stroke();
        break;

        case 3:
            ctx.beginPath();
            ctx.strokeStyle = 'rgb(226,47,111)';
            ctx.moveTo(140, 20);
            ctx.lineTo(140, 50);
            ctx.stroke();
        break;

        case 4:
            ctx.beginPath();
            ctx.arc(140, 50, 11, 0, Math.PI*2,true);
            ctx.closePath();
            ctx.fillStyle = 'rgb(246,97,15)';
            ctx.fill();
        break;


        case 5:
            ctx.beginPath();
            ctx.strokeStyle = 'orange';
            ctx.moveTo(140, 60);
            ctx.lineTo(120, 70);
            ctx.stroke();

            ctx.beginPath()
            ctx.strokeStyle = 'borange';
            ctx.moveTo(140, 60);
            ctx.lineTo(160, 70);
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = 'rgb(255,192,7)';
            ctx.moveTo(140, 58);
            ctx.lineTo(140, 90);
            ctx.stroke();
        break;

        case 6:
            ctx.beginPath();
            ctx.strokeStyle = 'red';
            ctx.moveTo(140, 90);
            ctx.lineTo(120, 100);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.strokeStyle = 'red';
            ctx.moveTo(140, 90);
            ctx.lineTo(160, 100);
            ctx.stroke();     
            alert('Vous avez perdu la partie !!')    
        break;
        default: alert('Vous avez perdu la partie !!')

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

function clearCanvas (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
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
    clearCanvas();
    clearCanvas ()
    message.classList.add('message');

    
}

    randomWord();
    generateButtons();
    guessWord();


    // //switch sur les fragment du Man

    // // hangman.addEventListener('click', () =>{
        
    // //         compteur++;
        
            
    //     })