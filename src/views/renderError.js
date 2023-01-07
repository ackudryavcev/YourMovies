function renderError(error) {
    const containerForCards = document.querySelector(".cards");
    containerForCards.innerHTML = "";
    const errorMessage = document.createElement("h2");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = error || `Now we can't find movies. Try later`;
    containerForCards.appendChild(errorMessage);
}

export { renderError }