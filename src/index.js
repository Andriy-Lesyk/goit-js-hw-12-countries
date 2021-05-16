
import fetchCountries from "./fetchCountries.js";

const inputCountry = document.querySelector('.inputCountry')
console.log(inputCountry);



inputCountry.addEventListener('input', open)
const name = inputCountry.value;
console.log(inputCountry.value)
function open(){ 
    console.log('sdfgh');
}

