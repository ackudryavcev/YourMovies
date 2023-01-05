function renderError() {
    const containerForCards = document.querySelector(".cards");
    containerForCards.innerHTML = "";
    const errorMessage = document.createElement("h2");
    errorMessage.textContent = `Now we can't find movies. Try later`;
    containerForCards.appendChild(errorMessage);
}

export { renderError }