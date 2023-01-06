import { data, favoriteTags } from "../data.js";

function addFavorite(event) {
    if (event.target.classList.contains("video-like")) {
        const favoriteElement = JSON.parse(event.target.parentElement.getAttribute("data-info"));
        event.target.classList.toggle("video-like-red");
        event.target.addEventListener("click", addFavorite);
        if (!favoriteTags.includes(favoriteElement.imdbID)) {
            favoriteTags.push(favoriteElement.imdbID);
            data.push(favoriteElement);
        }
        localStorage.setItem("favoriteTags", JSON.stringify(favoriteTags));
        localStorage.setItem("data", JSON.stringify(data));
    }
}

export { addFavorite }