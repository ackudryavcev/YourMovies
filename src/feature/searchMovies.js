import { renderCards } from "../views/renderCards.js";
import { getData } from "./request.js";
import { renderError } from "../views/renderError.js";

function searchMovies() {
    const searchLine = document.querySelector(".search-line");
    const searchYear = document.querySelector(".search-year");
    const searchType = document.querySelector(".search-type");
    const search = searchLine.value;
    const year = searchYear.value || "";
    const type = (searchType.value === "all") ? "" : searchType.value;
    searchLine.value = "";
    searchYear.value = "";
    searchType.value = "all"
    getData(search, year, type)
        .then(data => renderCards(data.Search, "", ""))
        .catch(renderError);
}

export { searchMovies }