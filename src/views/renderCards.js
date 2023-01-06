function renderCards(arrayOfData) {
    const containerForCards = document.querySelector(".cards");
    containerForCards.innerHTML = "";
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
        const containerForPoster = document.createElement("div");
        containerForPoster.classList.add("poster-container");
        const poster = document.createElement("img");
        poster.classList.add("video-poster");
        poster.src = element.Poster;
        poster.alt = element.Title;
        containerForPoster.appendChild(poster);
        const like = document.createElement("div");
        like.classList.add("video-like-container");
        like.innerHTML = `<svg class="video-like" width="30px" height="30px" viewBox="0 0 16 16" id="meteor-icon-kit__solid-plus-square-s"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 7H5C4.44772 7 4 7.4477 4 8C4 8.5523 4.44772 9 5 9H7V11C7 11.5523 7.4477 12 8 12C8.5523 12 9 11.5523 9 11V9H11C11.5523 9 12 8.5523 12 8C12 7.4477 11.5523 7 11 7H9V5C9 4.44772 8.5523 4 8 4C7.4477 4 7 4.44772 7 5V7zM2 0H14C15.1046 0 16 0.89543 16 2V14C16 15.1046 15.1046 16 14 16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.89543 0 2 0z"/></svg>`;
        containerForPoster.appendChild(like);
        card.appendChild(containerForPoster);
        containerForCards.appendChild(card);
    });
}

export { renderCards }