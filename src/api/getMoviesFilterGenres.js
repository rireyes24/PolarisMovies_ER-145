import { apiConfiguration } from "./apiConfig";

const getMovieFilterGenres = async (movieID, pageNumber) => {
    const config = await apiConfiguration();

    const response = await fetch(`${config.URL_DISCOVER}/movie?page=${pageNumber}&with_genres=${movieID}&language=en-US&sort_by=popularity.desc&api_key=${config.API_KEY}`);
    const data = await response.json();
    return data;
}

export { getMovieFilterGenres }
