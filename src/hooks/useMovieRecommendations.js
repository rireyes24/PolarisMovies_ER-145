import { useEffect, useState } from "react";
import { getMovieRecommendations } from "../api/getMovieRecommendations";

const movieLocation = () => {
    const location = window.location.pathname;
    const pathMovie = location.split('/')[2] || '111';
    let extrackID = pathMovie.split('-')[0];

    return extrackID;
}

const useMovieRecommendations = () => {
    
    const [dataRecommendations, setDataRecommendations] = useState([]);    

    useEffect(() => {
        getMovieRecommendations(movieLocation())
            .then(dataRecommendation => {
                setDataRecommendations(dataRecommendation.results);
            })
            .catch(error => {
            console.error(error);
            })
    }, []);

    return dataRecommendations;
}

export { useMovieRecommendations }