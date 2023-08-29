import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { getMovies } from './api/getMoviesDB'
import { getSearchMovie } from './api/getSearchMovies'
import { MoviePage } from './pages/MoviePage'
import { Home } from './pages/HomePage'
import { NavigtionBar } from './components/NavigationBar'
import { NavBar } from './components/NavBar'
///import { pathProcessor } from './utils/pathProcessor'
import './App.css'



function App() {  
  const [dataMovies, setDataMovies] = useState({});
  const [genresMovie, setGenresMovie] = useState([]);

 

  // Only Movie Section
  const [movieSelected, setMovieSelected] = useState({});

  //Search Section
  const refMovie  = useRef(null);
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  const searchMovie = () => {
    setSearch(refMovie.current.input.value);               
  }


  // Section Location 
  //      Funciona al ingrasar el id por medio de la barra de busqueda.

  const movieLocation = () => {
    const location = window.location.pathname;
    const pathMovie = location.split('/')[2] || '111';
    let extrackID = pathMovie.split('-')[0];

    return extrackID;
  }


  // Section Location 
  //      Funciona al ingrasar a la caja de busqueda.

  const searchID = () => {
    const movieID = movieSelected.id;
    let pathMovie = window.location.pathname.split('/')[2];
    pathMovie = movieID;

    return pathMovie;    
  }

  

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

  useEffect(() => {
    getSearchMovie(search)
      .then(dataSearch => {
        setSearchData(dataSearch);
      })
      .catch(error => {
        console.error(error);
      })
  }, [search]);

  return (
    <>
      <Router>
        <NavigtionBar
        ></NavigtionBar>
        <NavBar 
          refMovie={refMovie}
          searchMovie={searchMovie}
          searchValue={search}
          searchData={searchData}
          movieSelected={setMovieSelected}
          searchID={searchID}
        ></NavBar>
        <Routes>
          <Route path='/home' element={
            <Home />
          }></Route>
          <Route path="/pelicula/:id" element={
            <MoviePage
              title={dataMovies.title}  
              imagePath={dataMovies.poster_path}
              description={dataMovies.overview}
              voteAverage={dataMovies.vote_average}
              releaseDate={dataMovies.release_date}
              genres={genresMovie}
            ></MoviePage>
          }></Route>
          <Route path='*' element={<h1>Error 404 - Not Found</h1>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
