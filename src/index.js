import debounce from 'lodash.debounce';
import { name } from "file-loader";
import fetchCountries from "./fetchCountries.js";
import country from "./fetchCountries.js";

const inputCountry = document.querySelector('.inputCountry')
console.log(inputCountry);



const countryArr=null
inputCountry.addEventListener('input', debounce(searchCountry, 500));
function searchCountry(){
name=inputCountry.value    
fetchCountries(name)
console.log(inputCountry.value)

}