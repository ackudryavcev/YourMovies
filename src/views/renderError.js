//function renders errors
function renderError(error) {
    const containerForCards = document.querySelector(".cards");
    const searchResults = document.querySelector(".search-result");
    searchResults.textContent = "";
    containerForCards.innerHTML = "";
    const errorMessage = document.createElement("h2");
    errorMessage.classList.add("error-message");
    //we output either the passed error or the prepared text
    errorMessage.textContent = error || `Now we can't find movies. Try later`;
    containerForCards.appendChild(errorMessage);
}

export { renderError }