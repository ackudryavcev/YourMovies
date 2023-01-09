import { addFavorite } from "../feature/addFavorite.js";
import { favoriteTags } from "../data.js";

//function of drawing all cards about films
function renderCards(arrayOfData) {
    const containerForCards = document.querySelector(".cards");
    containerForCards.innerHTML = "";
    //we pass an array of films to the function, draw each of them
    arrayOfData.forEach(element => {
        const card = document.createElement("div");
        card.classList.add('card');
        const title = document.createElement("h3");
        title.classList.add("video-title");
        title.textContent = element.Title;
        card.appendChild(title);
        const type = document.createElement("p");
        type.classList.add("video-type");
        type.textContent = element.Type;
        card.appendChild(type);
        const year = document.createElement("p");
        year.classList.add("video-year");
        year.textContent = element.Year;
        card.appendChild(year);
        const link = document.createElement("a");
        link.classList.add("video-link");
        link.href = `https://www.imdb.com/title/${element.imdbID}/`
        link.textContent = `https://www.imdb.com/title/${element.imdbID}/`;
        link.target = "_blank"
        card.appendChild(link);
        const containerForPoster = document.createElement("div");
        containerForPoster.classList.add("poster-container");
        const poster = document.createElement("img");
        poster.classList.add("video-poster");
        poster.src = element.Poster;
        poster.alt = element.Title;
        containerForPoster.appendChild(poster);
        const like = document.createElement("div");
        like.classList.add("video-like-container");
        like.setAttribute("data-info", JSON.stringify(element));
        like.innerHTML = `<svg class="video-like" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V16M8 12H16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        const likeImage = like.children;
        //we hang an event listener on the plus sign, we will use it to add films to favorites or remove them from there
        likeImage[0].addEventListener('click', addFavorite);
        //here we check if the movie is in favorites, then add red color
        if (favoriteTags.includes(element.imdbID)) {
            likeImage[0].classList.add("video-like-red");
        }
        containerForPoster.appendChild(like);
        card.appendChild(containerForPoster);
        containerForCards.appendChild(card);
    });
}

export { renderCards }