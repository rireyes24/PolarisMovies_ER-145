const API_KEY = 'a244a9216439c099f1669f3d6777d613'; 


const getCategories = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es`);

    const data = await response.json();
    return data;
}

export { getCategories }