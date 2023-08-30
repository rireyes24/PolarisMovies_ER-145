import { apiConfiguration } from "./apiConfig";

const getMovieFilterGenres = async (movieID) => {
    const config = await apiConfiguration();

    const response = await fetch(`${config.URL_DISCOVER}/movie?&with_genres=${movieID}&language=en-US&sort_by=popularity.desc&api_key=${config.API_KEY}`);
    const data = await response.json();

    console.log(data.results);

    return data.results;
}

export { getMovieFilterGenres }