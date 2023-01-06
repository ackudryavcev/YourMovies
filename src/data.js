let data = JSON.parse(localStorage.getItem("data")) || [];
let favoriteTags = JSON.parse(localStorage.getItem("favoriteTags")) || [];
export { data, favoriteTags }