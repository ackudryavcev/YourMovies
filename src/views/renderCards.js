function renderCards(arrayOfData) {
    const containerForCards = document.querySelector(".cards");
    containerForCards.innerHTML = "";
    arrayOfData.forEach(element => {
        const card = document.createElement("div");
        card.classList.add('card');
        const title = document.createElement("h2");
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
        const poster = document.createElement("img");
        poster.classList.add("video-poster");
        poster.src = element.Poster;
        poster.alt = element.Title;
        card.appendChild(poster);
        containerForCards.appendChild(card);
    });
}

export { renderCards }