export default function fetchCountries(searchQuery) {
fetch('https://restcountries.eu/rest/v2/all')
.then(response=>{
return response.json();
})
.then(country=>{
    console.log(country);
})
.catch(error=>{
    console.log(error);
})
}