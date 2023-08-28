import { useState, useEffect, useRef } from 'react'
import { getMovies } from './api/getMoviesDB'
import { getSearchMovie } from './api/getSearchMovies'
import { MoviePage } from './pages/MoviePage'
import { Home } from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { pathProcessor } from './utils/pathProcessor'
import './App.css'


function App() {  
  const [dataMovies, setDataMovies] = useState({});
  const [validationMovie, setValidationMovie] = useState(true);
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

  useEffect(() => {
    if(validationMovie === true){      
      getMovies()
        .then(data => {
          setDataMovies(data);
          // setGenresMovie(data.genres);
          setValidationMovie(false);
        }).catch(error => {
          console.error(error);
        })
    }

    

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
          <Route path={`pelicula/${pathProcessor(movieSelected.title)}`} element={
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
