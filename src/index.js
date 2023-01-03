import './css/styles.css';
import { fetchCountries } from './fetchCountries'
import Debounce from "lodash.debounce";
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 1000;

const input = document.querySelector('#search-box');
const country = document.querySelector(".country-list");
// const lid = document.querySelector(".country-item");
const countryInfo = document.querySelector(".country-info");

input.addEventListener('input', new Debounce(onClick, DEBOUNCE_DELAY));

function onClick(evt) {
    fetchCountries(evt.target.value.trim()).then(data => addList(data)).catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'));
    const lid = document.querySelector(".country-item");




    //Використав таку конструкцію, технічно працює, але так погано

    if (lid) {
        for (let i = 0; i <= 10; i++){
            const lid = document.querySelector(".country-item");
            lid.remove();
        }
    }





}

function addList(arr) {
    // console.log(arr);

    if (arr.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (arr.length > 1) {
        const li = arr.map(({ flags, name }) => `<li class="country-item"><img src="${flags.svg}" alt="" class="country-img" width="25px">${name}</li>`).join('');
        country.insertAdjacentHTML('beforeend', li);
    } else {
        const div = arr.map(({ capital, population, languages, flags, name }) =>
            `<li class="country-item"><img src="${flags.svg}" alt="" class="country-img" width="25px">${name}</li>
        <div class="country-item">Capital: ${capital}</div>
        <div class="country-item">Population: ${population}</div>
        <div class="country-item">Languages: ${languages.map(lan => lan.name)}</div>`).join('');
        countryInfo.insertAdjacentHTML('beforeend', div)
    }
}