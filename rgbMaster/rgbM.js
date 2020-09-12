let numcolorCases = 6;
let colors = [];
let pickedColor;

let colorHeader = document.querySelector(".header");
let colorCases = document.querySelectorAll(".colorCase");
let afficheResult = document.getElementById("afficheResult");
let statusDisplay = document.querySelector('#status');
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let = 

init();

function init() {
    setupModeButtons();
    setupColorCases();
    reset();
}


function setupModeButtons(){
    for(let i = 0; i < modeButtons.length; i++){

        modeButtons[i].addEventListener("click", function(){

                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");

            this.classList.add("selected");

            this.textContent === "Easy" ? numcolorCases = 3: numcolorCases = 6;
            reset();
       });

    }
}


function setupColorCases(){
 for( let i = 0; i < colorCases.length; i++){
    //ajout de couleur initial aux carrés
     colorCases[i].style.backgroundColor = colors[i];
     //ecoute des click des carrés
     colorCases[i].addEventListener("click", function(){

         //ajout de la couleur en background
         let clickedColor = this.style.backgroundColor;
            console.log(clickedColor);
         if(clickedColor === pickedColor){
             statusDisplay.innerHTML = `<img src="surprised.svg" alt=""> <br> <p>Bien jouer ! Felicitation </p>`;
             resetButton.textContent = "Play Again?";
             changeColor(clickedColor);
             colorHeader.style.backgroundColor = clickedColor;
         }  
         else{
             this.style.backgroundColor = "transparent";
             this.style.border = null;
             this.style.boxShadow = null;
             statusDisplay.innerHTML = `<img src="cool.svg" alt=""> <br> <p>Essayez encore !</p>`;
         }
     });
  }
}



function reset(){
    //generer nouvelle couleur
    colors = generateRandomColors(numcolorCases);
    //prelevement aleatoire d'une nouvelle couleur 
    pickedColor = pickColor();

    afficheResult.textContent = pickedColor;

    statusDisplay.textContent = "";
    resetButton.textContent = "New Colors";

    //changer les couleur des carrées
    for(let i = 0; i < colorCases.length; i++){
        if(colors[i]) {
            colorCases[i].style.display = "block";
            colorCases[i].style.backgroundColor = colors[i];
        } else {
            colorCases[i].style.display = "none";
        }
    } h1.style.backgroundColor = "";

}


resetButton.addEventListener("click", function(){
    reset();

});



function changeColor(color){
    //creer une boucle a travers les carrées
    for(let i = 0; i < colorCases.length; i++){
        //changement des couleur pour correspondre  à la couleur donnee;
        colorCases[i].style.backgroundColor = color;

    }
}


function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}



function generateRandomColors(num){
    //creation d'un tableau
    let arr = [];

    //repetition num fois
    for(let i = 0; i < num; i++){
        // couleur aleatoir et push dans arr

        arr.push(randomColor());
    }
    return arr;
}



function randomColor(){

        let r = Math.floor(Math.random() * 256);

        let g = Math.floor(Math.random() * 256);

        let b = Math.floor(Math.random() * 256);
    
       return "rgb(" + r + ', ' + g + ', ' + b +  ")";
}
