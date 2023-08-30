import { useState, useEffect } from 'react'
import { getMovies } from '../api/getMoviesDB'


// Section Location (Funciona al ingrasar el id por medio de la barra de busqueda.)
const movieLocation = () => {
    const location = window.location.pathname;
    const pathMovie = location.split('/')[2] || '111';
    let extrackID = pathMovie.split('-')[0];

    return extrackID;
}

const useGetMovies = () => {
    
    const [dataMovies, setDataMovies] = useState({});    
    const [genresMovie, setGenresMovie] = useState([]);

    useEffect(() => {
        getMovies(movieLocation())
            .then(dataMovie => {
            setDataMovies(dataMovie);
            setGenresMovie(dataMovie.genres);
            })
            .catch(error => {
            console.error(error);
            })
        }, []);

    return {dataMovies, genresMovie};
}

export { useGetMovies }