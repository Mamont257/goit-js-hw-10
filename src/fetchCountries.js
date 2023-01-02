 export function fetchCountries(name) {
    //  console.log(name);
     const resp = fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`);
     return resp.then(data => data.json()).catch(err => console.log(err))
 }