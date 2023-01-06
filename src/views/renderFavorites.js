import { data } from "../data.js";
import { renderCards } from "./renderCards.js";

function renderFavorites(number) {
    const favoriteLink = document.querySelectorAll(".menu-item")[1];
    const searchLink = document.querySelectorAll(".menu-item")[0];
    const favoriteImage = document.querySelectorAll(".menu-item-image")[1];
    const searchImage = document.querySelectorAll(".menu-item-image")[0];
    const favoriteButtonsContainer = document.querySelector(".favorite-buttons");
    favoriteButtonsContainer.innerHTML = "";
    const numberOfMovies = 9;
    let currentNumber = 0;
    if (Number.isInteger(number)) { currentNumber = number }
    favoriteLink.classList.add('choose');
    searchLink.classList.remove('choose');
    favoriteImage.classList.add('red-color');
    searchImage.classList.remove('red-color');
    const dataForRender = data.slice(currentNumber, currentNumber + numberOfMovies);
    renderCards(dataForRender);
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