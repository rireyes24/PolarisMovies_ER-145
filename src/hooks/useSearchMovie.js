import { useState, useEffect, useRef } from 'react'
import { getSearchMovie } from '../api/getSearchMovies'

const useSearchMovie = () => {

    //Search Section
    const refMovie  = useRef(null);
    
    const [search, setSearch] = useState('');    
    const [searchData, setSearchData] = useState([]);

    
    const searchMovie = () => {
    setSearch(refMovie.current.value);               
    }

    useEffect(() => {
        getSearchMovie(search)
          .then(dataSearch => {
            setSearchData(dataSearch);
          })
          .catch(error => {
            console.error(error);
          })
    }, [search]);

    return {search, searchData, searchMovie, refMovie };
}

export { useSearchMovie }