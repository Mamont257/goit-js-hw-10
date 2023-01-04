import './css/styles.css';
import { fetchCountries } from './fetchCountries'
import Debounce from "lodash.debounce";
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const country = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

input.addEventListener('input', new Debounce(onClick, DEBOUNCE_DELAY));

function onClick(evt) {
    fetchCountries(evt.target.value.trim()).then(data => addList(data)).catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'))}

function addList(arr) {
    // console.log(arr);

    if (arr.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        country.innerHTML = '';
        countryInfo.innerHTML = '';
    } else if (arr.length > 1) {
        countryInfo.innerHTML = '';
        const li = arr.map(({ flags, name }) => `<li class="country-item"><img src="${flags.svg}" alt="" class="country-img" width="25px">${name}</li>`).join('');
        country.innerHTML = li;
    } else {
        country.innerHTML = '';
        countryInfo.innerHTML = '';
        const div = arr.map(({ capital, population, languages, flags, name }) =>
        `<div class="country-item info"><img src="${flags.svg}" alt="" class="country-img" width="25px">${name}</div>
        <div class="country-item"><span class="country-item_text">Capital: </span> ${capital}</div>
        <div class="country-item"><span class="country-item_text">Population: </span> ${population}</div>
        <div class="country-item"><span class="country-item_text">Languages: </span> ${languages.map(lan => lan.name)}</div>`).join('');
        countryInfo.innerHTML = div;
    }
}