import { getData } from "./feature/request.js";
import { renderCards } from "./views/renderCards.js";
import { renderError } from "./views/renderError.js";
import { searchMovies } from "./feature/searchMovies.js";

window.onload = () => {
    const button = document.querySelector(".button");
    const searchLine = document.querySelector(".search-line");
    searchLine.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            searchMovies()
        }
    })
    button.addEventListener("click", searchMovies);
    getData('New Year', '', '')
        .then(data => renderCards(data.Search))
        .catch(renderError);

};