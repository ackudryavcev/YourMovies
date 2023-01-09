import { data } from "../data.js";
import { renderCards } from "./renderCards.js";

//feature to draw favorite movies
function renderFavorites(number) {
    const favoriteLink = document.querySelectorAll(".menu-item")[1];
    const searchLink = document.querySelectorAll(".menu-item")[0];
    const favoriteImage = document.querySelectorAll(".menu-item-image")[1];
    const searchImage = document.querySelectorAll(".menu-item-image")[0];
    const favoriteButtonsContainer = document.querySelector(".favorite-buttons");
    const searchResults = document.querySelector(".search-result");
    favoriteButtonsContainer.innerHTML = "";
    searchResults.textContent = "Here are your favorite films";
    //we will display 9 films per page
    const numberOfMovies = 9;
    let currentNumber = 0;
    //check whether the number passed to the function is the number, if not check, then if nothing is passed, the event gets
    if (Number.isInteger(number)) { currentNumber = number }
    favoriteLink.classList.add('choose');
    searchLink.classList.remove('choose');
    favoriteImage.classList.add('red-color');
    searchImage.classList.remove('red-color');
    //we cut the array with films to the required 9 films and send it for rendering
    const dataForRender = data.slice(currentNumber, currentNumber + numberOfMovies);
    renderCards(dataForRender);
    //check whether it is possible to add buttons next previous page to navigate between pages
    //we hang events on buttons that allow navigation among favorite films
    if (currentNumber > numberOfMovies - 1) {
        const buttonPrev = document.createElement("button");
        buttonPrev.classList.add('button-navigation');
        buttonPrev.textContent = "Prev";
        buttonPrev.addEventListener('click', () => {
            renderFavorites(currentNumber - numberOfMovies);
        })
        favoriteButtonsContainer.appendChild(buttonPrev);
    }
    if (data.length > currentNumber + numberOfMovies) {
        const buttonNext = document.createElement("button");
        buttonNext.classList.add('button-navigation');
        buttonNext.textContent = "Next";
        buttonNext.addEventListener('click', () => {
            renderFavorites(currentNumber + numberOfMovies);
        })
        favoriteButtonsContainer.appendChild(buttonNext);
    }

}

export { renderFavorites }