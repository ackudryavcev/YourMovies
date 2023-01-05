import { renderCards } from "../views/renderCards.js";
import { getData } from "./request.js";
import { renderError } from "../views/renderError.js";

function searchMovies() {
    const searchLine = document.querySelector(".search-line");
    const search = searchLine.value;
    searchLine.value = "";
    getData(search, "", "")
        .then(data => renderCards(data.Search, "", ""))
        .catch(renderError);
}

export { searchMovies }