import { data, favoriteTags } from "../data.js";
import { renderFavorites } from "../views/renderFavorites.js";

// function to add a movie to favorites
function addFavorite(event) {
    //check that the parent of the element we clicked contains the given class
    if (event.target.parentElement.classList.contains("video-like")) {
        // we extract data from the data-info attribute, there we have an object about the movie
        const favoriteElement = JSON.parse(event.target.parentElement.parentElement.getAttribute("data-info"));
        event.target.parentElement.classList.toggle("video-like-red");
        event.target.parentElement.addEventListener("click", addFavorite);
        //add the movie to favorites if it is not there
        if (!favoriteTags.includes(favoriteElement.imdbID)) {
            favoriteTags.push(favoriteElement.imdbID);
            data.push(favoriteElement);

        } //otherwise delete 
        else {
            let elementNumber;
            const favoriteLink = document.querySelectorAll(".menu-item")[1];
            favoriteTags.forEach((element, index) => {
                if (element === favoriteElement.imdbID) {
                    elementNumber = index;
                }
            });
            data.splice(elementNumber, 1);
            favoriteTags.splice(elementNumber, 1);
            //if we delete it on the featured movies page, we immediately re-render all the featured movies
            if (favoriteLink.classList.contains("choose")) {
                renderFavorites();
            }
        }
        //update information in local storage
        localStorage.setItem("favoriteTags", JSON.stringify(favoriteTags));
        localStorage.setItem("data", JSON.stringify(data));
    }
}

export { addFavorite }