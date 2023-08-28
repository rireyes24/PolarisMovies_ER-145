const API_KEY = 'a244a9216439c099f1669f3d6777d613'; 

const getSearchMovie = async (searchBar) => {

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchBar}&api_key=${API_KEY}&language=en`);

    const data = await response.json();
    console.log(data);
    return data.results;
}

export { getSearchMovie }