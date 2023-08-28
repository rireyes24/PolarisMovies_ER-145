const API_KEY = 'a244a9216439c099f1669f3d6777d613'; 

const getTrends = async () => {

    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en`);

    const data = await response.json();
    return data.results;

}

export { getTrends }



