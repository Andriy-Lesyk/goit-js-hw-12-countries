import debounce from 'lodash.debounce';
import { name } from "file-loader";
import fetchCountries from "./fetchCountries.js";
import template1 from "./countries.hbs";
import {notice, defaultModules} from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop';



const inputCountry = document.querySelector('.inputCountry')
console.log(inputCountry);
const countryList = document.querySelector('.countryList')
console.log(countryList)

function renderCountry(country){
    const markup = template1(country)
    countryList.innerHTML = markup;
}
function cleanCountryList(){
    countryList.removeChild
}

inputCountry.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(){
countryList.innerHTML=""
name=inputCountry.value  
console.log(inputCountry.value )  
 fetchCountries(name)
.then(country=>{console.log(country)
    if (country.length>1 && country.length<=10){
const markup = []
country.map(count=>{
    const newLi=document.createElement('li')
    console.log(count.name)
    newLi.append(count.name)
    markup.push(newLi)   
});
countryList.append(...markup)
    } else if(country.length===1){
        const markup=country.map(template1).join('')
        countryList.insertAdjacentHTML('beforeend', markup)
    } else if (country.length>10){
        const myNotice = notice({
            text: "Too many matches found. Please enter a more specific query!",
          
          });
   
    }
});
}


