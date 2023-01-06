import { data, favoriteTags } from "../data.js";
import { renderFavorites } from "../views/renderFavorites.js";

function addFavorite(event) {
    if (event.target.classList.contains("video-like")) {
        const favoriteElement = JSON.parse(event.target.parentElement.getAttribute("data-info"));
        event.target.classList.toggle("video-like-red");
        event.target.addEventListener("click", addFavorite);
        if (!favoriteTags.includes(favoriteElement.imdbID)) {
            favoriteTags.push(favoriteElement.imdbID);
            data.push(favoriteElement);

        } else {
            let elementNumber;
            const favoriteLink = document.querySelectorAll(".menu-item")[1];
            favoriteTags.forEach((element, index) => {
                if (element === favoriteElement.imdbID) {
                    elementNumber = index;
                }
            });
            data.splice(elementNumber, 1);
            favoriteTags.splice(elementNumber, 1);
            if (favoriteLink.classList.contains("choose")) {
                renderFavorites();
            }
        }
        localStorage.setItem("favoriteTags", JSON.stringify(favoriteTags));
        localStorage.setItem("data", JSON.stringify(data));
    }
}

export { addFavorite }