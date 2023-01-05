function getData(searchLine, year, type) {
    return fetch(`https://www.omdbapi.com/?s=${searchLine}&y=${year}&type=${type}&apikey=b340e7f`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export { getData }