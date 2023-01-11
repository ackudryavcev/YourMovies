import { renderCards } from "../views/renderCards.js";
import { getData } from "./request.js";
import { renderError } from "../views/renderError.js";

//movie search function
function searchMovies(searchWord) {
    //clear the screen and change the menu design
    const favoriteButtonsContainer = document.querySelector(".favorite-buttons");
    const searchResults = document.querySelector(".search-result");
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
    //we are looking for a movie either by the search field or by the passed variable
    const search = searchLine.value || searchWord;
    const year = searchYear.value || "";
    const type = (searchType.value === "all") ? "" : searchType.value;
    //clear all search fields
    searchLine.value = "";
    searchYear.value = "";
    searchType.value = "all"
        //send a request to the server
    getData(search, year, type)
        .then(data => {
            if (data.Response === "True") {
                //if it came and is successful, we display the number of found films and draw cards
                renderCards(data.Search);
                searchResults.textContent = `Your request - ${search}. Total found ${data.totalResults} movies`;
            } else {
                //if the response from the server came, but it was not successful, we display an error with the response from the server
                renderError(data.Error)
            }
        })
        .catch(error => {
            //if something went wrong
            renderError()
        });
}

export { searchMovies }