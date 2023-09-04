// Configuracion para usar variables de entorno con vite
const apiConfiguration = async () => {
    await new Promise((resolve) => setTimeout(resolve), 100);

    const config = {
        API_KEY: import.meta.env.VITE_API_KEY,
        URL_MOVIE: import.meta.env.VITE_URL_MOVIE,
        URL_SEARCH: import.meta.env.VITE_URL_SEARCH,
        URL_TRENDS: import.meta.env.VITE_URL_TRENDS,
        URL_GENRES: import.meta.env.VITE_URL_GENRES,
        URL_DISCOVER: import.meta.env.VITE_URL_DISCOVER,
    }

    return config;
}

export { apiConfiguration }


// const apiConfiguration = async () => {
//     const response = await fetch('../../config.json');
//     const config = await response.json();
//     return config;
// }