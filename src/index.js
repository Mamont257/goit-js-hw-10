import './css/styles.css';
import { fetchCountries } from './fetchCountries'
import Debounce from "lodash.debounce";

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const country = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");
// console.log(countryInfo);

input.addEventListener('input', new Debounce(onClick, DEBOUNCE_DELAY));

function onClick(evt) {
    console.dir(evt.target.value);
    fetchCountries(evt.target.value.trim()).then(data => data.map(dat => addList(dat)));
}

function addList(arr) {
    console.log(arr);
    // const li = arr.map(ar => ar.name);
    // console.log(li);
    country.insertAdjacentHTML('beforeend', `<li class="country-item">${arr.name}</li>`)
}


// console.log(rt.then(data => data.json()).then(res => console.log(res[0])));

// fetchCountries("And").then(data => data.map(dat => console.log(dat)));
