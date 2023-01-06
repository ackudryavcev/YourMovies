import { getData } from "./feature/request.js";
import { renderCards } from "./views/renderCards.js";
import { renderError } from "./views/renderError.js";
import { searchMovies } from "./feature/searchMovies.js";
import { renderFavorites } from "./views/renderFavorites.js";

window.onload = () => {
    const button = document.querySelector(".button");
    const searchLine = document.querySelector(".search-line");
    const favoriteLink = document.querySelectorAll(".menu-item")[1];
    const searchLink = document.querySelectorAll(".menu-item")[0];
    searchLine.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            searchMovies()
        }
    })
    button.addEventListener("click", searchMovies);
    favoriteLink.addEventListener("click", renderFavorites)
    searchLink.addEventListener("click", () => {
        getData('Christmas', '', '')
            .then(data => renderCards(data.Search))
            .catch(renderError);

    })
    getData('New Year', '', '')
        .then(data => renderCards(data.Search))
        .catch(renderError);

};