import { data } from "../data.js";
import { renderCards } from "./renderCards.js";

function renderFavorites() {
    const favoriteLink = document.querySelectorAll(".menu-item")[1];
    const searchLink = document.querySelectorAll(".menu-item")[0];
    const favoriteImage = document.querySelectorAll(".menu-item-image")[1];
    const searchImage = document.querySelectorAll(".menu-item-image")[0];
    favoriteLink.classList.add('choose');
    searchLink.classList.remove('choose');
    favoriteImage.classList.add('red-color');
    searchImage.classList.remove('red-color');
    renderCards(data);
}

export { renderFavorites }