fetch('https://restcountries.com/v2/all');

// console.log(resp);
// export  default resp.then(data => data.json()).then(res => console.log(res[0]));

 export function fetchCountries(name) {
     console.log(name);
     const resp = fetch(`https://restcountries.com/v2/name/${name}`);
     return resp.then(data => data.json()).catch(err => console.log(err))
 }



//  .filter((re) => re.name = name)