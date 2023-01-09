//a file with selected films, we take from the local storage or create a new one. 
//For the convenience of searching I made 2 variables, 1 where only movie tags are stored, the second is an array of objects with movies
const data = JSON.parse(localStorage.getItem("data")) || [];
const favoriteTags = JSON.parse(localStorage.getItem("favoriteTags")) || [];
export { data, favoriteTags }