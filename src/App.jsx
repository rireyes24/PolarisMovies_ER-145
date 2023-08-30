import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useGetMovies } from './hooks/useGetMovies'
import { useSearchMovie } from './hooks/useSearchMovie'
import { MoviePage } from './pages/MoviePage'
import { Home } from './pages/HomePage'
import { GenresPage } from './pages/CategoryPage'
import { NavigtionBar } from './components/NavigationBar'
import { HeaderSearch } from './components/HeaderSearch'

import './App.css'
import { FooterBar } from './components/FooterBar'


function App() {  

  const {dataMovies, genresMovie} = useGetMovies();
  const { search, searchData, searchMovie, refMovie } = useSearchMovie();


  // Category Section
  const [dataCategory, setDataCategory] = useState();

  return (
    <>
      <Router>        
          <NavigtionBar />
          <HeaderSearch 
            refMovie={refMovie}
            searchMovie={searchMovie}
            searchValue={search}
            searchData={searchData}
          ></HeaderSearch>
          <Routes>

            <Route path='/home' exact element={<Home 
              setDataCategory={setDataCategory}
            />}></Route>

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

            <Route path="/category/:id" element={
              <GenresPage
                dataCategory={dataCategory}
              ></GenresPage>}
            ></Route>

            <Route path='*' element={
              <h1>Error 404 - Not Found</h1>
            }></Route>

          </Routes>
          <FooterBar />
      </Router>
    </>
  )
}

export default App
