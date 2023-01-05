import { getData } from "./request.js";
import { renderCards } from "./views/renderCards.js";
import { renderError } from "./views/renderError.js";

getData('Christmas', '', '')
    .then(data => renderCards(data.Search))
    .catch(renderError)