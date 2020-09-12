let countdown;
const timerLeft = document.querySelector('.time-left');
const endTime = document.querySelector('.end-time');
const bouttonsTemps = document.querySelectorAll('[data-time]');

function timer(donneeEnSeconds) {
    //reinitialisationn du decompteur
    clearInterval(countdown);

   const tempsActuel = Date.now();
   const tempsLimite = tempsActuel + donneeEnSeconds * 1000;

   displayTimeLeft(donneeEnSeconds);
   displayEndTime(tempsLimite);


  countdown = setInterval(() => {
        const secondsLeft = Math.round((tempsLimite - Date.now()) / 1000);
        // creer un arret
         if(secondsLeft < 0) {
             clearInterval(countdown);
             return;
         }
         //affichage
        displayTimeLeft(secondsLeft);
    }, 1000);
}


function displayTimeLeft(donneeEnSeconds) {
    const minutes = Math.floor(donneeEnSeconds / 60);
    const remainderSeconds = donneeEnSeconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    document.title = display;
    timerLeft.textContent = display;

}

function displayEndTime(x) {
    const end = new Date(x);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    let returnBack = `${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
    let returnBackColor = returnBack.fontcolor('blue')
    endTime.textContent = `Vous serrez notifié à `  +  returnBack;
}

function startTimer() {
    const donneeEnSeconds = parseInt(this.dataset.time);
    timer(donneeEnSeconds);
}

bouttonsTemps.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);

    // console.log(mins);
    // this.reset();
});
