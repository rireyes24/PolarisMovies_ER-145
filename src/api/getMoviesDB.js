
const API_KEY = 'a244a9216439c099f1669f3d6777d613'; 

const getMovies = async (movieID) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=es`);

    const data = await response.json();
    return data;
}

export { getMovies }