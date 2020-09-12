let arr = ['Iya magana maa da raanarsa', 'Say kogo ya tsagé kadangaré yaké samun chiga', 'Hantsi leqa gidan kowa',
'idan raana ta fito tafin hannu baya karé ta', 'Dan guntun gatarinka yafi sari ka bani'];

function magana () {
    var numarr = Math.floor(Math.random()*(4));
    document.getElementById('generateur').innerHTML = arr[numarr];

}