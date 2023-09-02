import { useEffect, useState } from "react";
import { getMovieFilterGenres } from "../api/getMoviesFilterGenres";
import { useCategories } from "./useCategories";



const useMovieFilterGenres = () => {

  const [discoverData, setDicoverData] = useState([]);  
  const [numerPage, setNumberPage ] = useState(1);
  const [genreID, setGenreID ] = useState('');  

  const category = window.location.pathname.split('/')[2];
  const newCategory = category.split('-')[0];

  
  const [categoryName, setCategoryName] = useState('');
  const dataCategories = useCategories();

  useEffect(() => { 
    const findName = dataCategories.find(item => parseInt(item.id) === parseInt(genreID));
    if(findName){
      setCategoryName(findName.name);
    }else{
      setCategoryName("");
    }

  }, [dataCategories, genreID]);
  
  try{
    useEffect(() => {
      getMovieFilterGenres(newCategory, numerPage)
        .then(movieGenre => {
          if(movieGenre.success === false){           
            alert(movieGenre.errors)
          }else{
            setGenreID(newCategory);
            setDicoverData(movieGenre.results);
          }
        }).catch(error => {       
          console.error(error);
        })
    }, [newCategory, numerPage])

    return {discoverData, setNumberPage, categoryName};
  }catch(error){
    console.error(error);
  }

}

export { useMovieFilterGenres }