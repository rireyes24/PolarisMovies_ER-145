import { apiConfiguration } from "./apiConfig";

const getSearchMovie = async (searchBar) => {
    const config = await apiConfiguration();

    const response = await fetch(`${config.URL_SEARCH}/movie?query=${searchBar}&api_key=${config.API_KEY}&language=en`);
    const data = await response.json();
    return data.results;
}

export { getSearchMovie }