
import fetchCountries from "./fetchCountries.js";

const inputCountry = document.querySelector('.inputCountry')
console.log(inputCountry);



inputCountry.addEventListener('input', _.debaunce(open, 1500))
const name = inputCountry.value;
console.log(inputCountry.value)
function open(){ 
    console.log('sdfgh');
}

