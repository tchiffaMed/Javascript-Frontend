let arr = ['Iya magan maa da raanarsa', 'Say kogo ya tsagé kadangaré yaké samun ckiga', 'Hantsi leqa gidan kowa',
'idan raana ta fito tafin hannu bay karé ta', 'Dan guntun gatarinka yafi sari ka bani'];

function magana () {
    var numarr = Math.floor(Math.random()*(4));
    document.getElementById('quotePlay').innerHTML = arr[numarr];

}