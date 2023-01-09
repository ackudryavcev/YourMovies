import { searchMovies } from "./feature/searchMovies.js";
import { renderFavorites } from "./views/renderFavorites.js";

//entry point, we start executing the code after loading the entire page
window.onload = () => {
    const button = document.querySelector(".button");
    const searchLine = document.querySelector(".search-line");
    const favoriteLink = document.querySelectorAll(".menu-item")[1];
    const searchLink = document.querySelectorAll(".menu-item")[0];
    //we hang an event on the search button, on the Enter button on the keyboard, on the navigation menu
    searchLine.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            searchMovies()
        }
    })
    button.addEventListener("click", searchMovies);
    favoriteLink.addEventListener("click", renderFavorites);
    searchLink.addEventListener("click", () => {
        searchMovies('Christmas');
    });
    //we immediately display the results of the search for movies on the request New Year
    searchMovies('New Year');
};