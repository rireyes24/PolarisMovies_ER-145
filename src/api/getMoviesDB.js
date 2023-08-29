import { apiConfiguration } from "./apiConfig";

const getMovies = async (movieID) => {
    const config = await apiConfiguration();

    const response = await fetch(`${config.URL_MOVIE}/${movieID}?api_key=${config.API_KEY}&language=en`);
    const data = await response.json();
    return data;
}

export { getMovies }