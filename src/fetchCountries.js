fetch('https://restcountries.com/v2/all');

// console.log(resp);
// export  default resp.then(data => data.json()).then(res => console.log(res[0]));

 export const fun = function fetchCountries(name) {
     console.log(name);
     const resp = fetch('https://restcountries.com/v2/all');
     return resp.then(data => data.json()).then(res => res[0])
}