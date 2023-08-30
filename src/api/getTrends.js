import { apiConfiguration } from "./apiConfig";

const getTrends = async () => {
    const config = await apiConfiguration();

    const response = await fetch(`${config.URL_TRENDS}/movie/day?api_key=${config.API_KEY}&language=en`);
    const data = await response.json();
    console.log(data.results);
    return data.results;
}

export { getTrends }



