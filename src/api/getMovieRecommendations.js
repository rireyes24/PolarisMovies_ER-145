import { apiConfiguration } from "./apiConfig";

const getMovieRecommendations = async (movieID) => {
    const config = await apiConfiguration();

    const response = await fetch(`${config.URL_MOVIE}/${movieID}/recommendations?api_key=${config.API_KEY}&language=en`);
    const data = await response.json();
    return data;
}

export { getMovieRecommendations }