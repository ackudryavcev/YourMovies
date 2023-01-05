import { getData } from "./feature/request.js";
import { renderCards } from "./views/renderCards.js";
import { renderError } from "./views/renderError.js";
import { searchMovies } from "./feature/searchMovies.js";

window.onload = () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", searchMovies);
    getData('Christmas', '', '')
        .then(data => renderCards(data.Search))
        .catch(renderError);

};