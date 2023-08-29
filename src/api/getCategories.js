import { apiConfiguration } from "./apiConfig";

const getCategories = async () => {
    const config = await apiConfiguration();

    const response = await fetch(`${config.URL_GENRES}/movie/list?api_key=${config.API_KEY}&language=es`);
    const data = await response.json();
    return data;
}

export { getCategories }