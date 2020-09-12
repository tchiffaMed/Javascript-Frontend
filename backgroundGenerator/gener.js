const daya = document.getElementById('daya');
const biyu = document.getElementById('biyu');
const bodyBack = document.getElementById('bodyBack');
const graTitle = document.getElementById('graTitle');

const setbgcolor = () => {
    
    bodyBack.style.background = `linear-gradient(to right top, ${daya.value}, ${biyu.value})`;

    graTitle.textContent = `linear-gradient(to right top, ${daya.value}, ${biyu.value})`;

}
    daya.addEventListener('input', setbgcolor);
    biyu.addEventListener('input', setbgcolor);


