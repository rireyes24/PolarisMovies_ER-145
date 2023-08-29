import { useState, useEffect, useRef } from 'react'
import { getMovies } from './api/getMoviesDB'
import { getSearchMovie } from './api/getSearchMovies'
import { MoviePage } from './pages/MoviePage'
import { Home } from './pages/HomePage'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { pathProcessor } from './utils/pathProcessor'
import './App.css'


function replaceQueryParam(url, oldParam, newParam, newValue) {
  const queryParams = new URLSearchParams(new URL(url).search);
  queryParams.delete(oldParam);
  queryParams.set(newParam, newValue);
  return url.split('?')[0] + '?' + queryParams.toString();
}


function App() {  
  const [dataMovies, setDataMovies] = useState({});
  const [validationMovie, setValidationMovie] = useState(true);
  const [genresMovie, setGenresMovie] = useState([]);

  // Section URL
  const { id } = useParams();

  const currentURL = window.location.href;

  // Crear una nueva URL con el nombre del parámetro cambiado
  const newParamName = "newId";
  const newParamValue = "the-falsh"; // Nuevo valor del parámetro
  const newURL = replaceQueryParam(currentURL, "id", newParamName, newParamValue);

  // Actualizar la URL en la barra de navegación
  window.history.replaceState({}, document.title, newURL);



  // Only Movie Section
  const [movieSelected, setMovieSelected] = useState({});

  //Search Section
  const refMovie  = useRef(null);
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  const searchMovie = () => {
    setSearch(refMovie.current.input.value);               
  }

  // const newURL = currentURL.split('/');
  // const arrayURL = newURL[newURL.length -1]
  console.log('El ID es: ', curr);


  // Función para reemplazar un parámetro en la URL


  useEffect(() => {
    getSearchMovie(arrayURL)
      .then(dataSearch => {
        setSearchData(dataSearch);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  // useEffect(() => {
  //   getSearchMovie(search)
  //     .then(dataSearch => {
  //       setSearchData(dataSearch);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     })
  // }, [search]);



 
  

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <NavBar 
          refMovie={refMovie}
          searchMovie={searchMovie}
          searchValue={search}
          searchData={searchData}
          movieSelected={setMovieSelected}
        ></NavBar>
        <Routes>
          <Route path='/home' element={
            <Home></Home>
          }></Route>
          <Route path="/pelicula/:id" element={
            <MoviePage
              title={movieSelected.title}  
              imagePath={movieSelected.poster_path}
              description={movieSelected.overview}
              voteAverage={movieSelected.vote_average}
              releaseDate={movieSelected.release_date}
              genres={genresMovie}
            ></MoviePage>
          }></Route>
          <Route path='*' element={<h1>Error 404 - Not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
