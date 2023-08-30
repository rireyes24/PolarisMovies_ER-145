import { useEffect, useState } from "react";
import { getMovieFilterGenres } from "../api/getMoviesFilterGenres";


const useMovieFilterGenres = () => {
    
  const [discoverData, setDicoverData] = useState([]);

  const category = window.location.pathname.split('/')[2];
  const newCategory = category.split('-')[0];

  useEffect(() => {
    getMovieFilterGenres(newCategory)
      .then(movieGenre => {
        setDicoverData(movieGenre)
        console.log(movieGenre);
      }).catch(error => {
        console.error(error);
      })
  }, [])

  return discoverData;

}

export { useMovieFilterGenres }