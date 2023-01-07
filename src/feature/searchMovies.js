import { renderCards } from "../views/renderCards.js";
import { getData } from "./request.js";
import { renderError } from "../views/renderError.js";

function searchMovies(searchWord) {
    const favoriteButtonsContainer = document.querySelector(".favorite-buttons");
    favoriteButtonsContainer.innerHTML = "";
    const favoriteLink = document.querySelectorAll(".menu-item")[1];
    const searchLink = document.querySelectorAll(".menu-item")[0];
    const favoriteImage = document.querySelectorAll(".menu-item-image")[1];
    const searchImage = document.querySelectorAll(".menu-item-image")[0];
    favoriteLink.classList.remove('choose');
    searchLink.classList.add('choose');
    favoriteImage.classList.remove('red-color');
    searchImage.classList.add('red-color');
    const searchLine = document.querySelector(".search-line");
    const searchYear = document.querySelector(".search-year");
    const searchType = document.querySelector(".search-type");
    const search = searchLine.value || searchWord;
    const year = searchYear.value || "";
    const type = (searchType.value === "all") ? "" : searchType.value;
    searchLine.value = "";
    searchYear.value = "";
    searchType.value = "all"
    getData(search, year, type)
        .then(data => {
            if (data.Response === "True") {
                renderCards(data.Search)
            } else {
                renderError(data.Error)
            }
        })
        .catch(error => {
            renderError()
        });
}

export { searchMovies }