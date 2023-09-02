import { styled } from "styled-components";
import { TrendsCards } from "../components/TrendsCards";
import { pathProcessor } from "../utils/pathProcessor";
import { useMovieFilterGenres } from "../hooks/useMovieFilterGenres";
import { Pagination } from "antd";

const Container = styled.section`
  width: 92%;
  background-color: var(--Center-Brick);
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  padding: 24px;
`;

const GenresPage = () => {

  const {discoverData, setNumberPage, categoryName} = useMovieFilterGenres();
 
  function pagination(page){
    setNumberPage(page);
  }

  return(
      <>
      <h1>{categoryName}</h1>
        <Container>
          {
            discoverData.map(movie => {
              const yearMovie = movie.release_date.split('-');
              return(
                <TrendsCards
                  goMovie={() => {
                      window.location.pathname = `pelicula/${movie.id}-${pathProcessor(movie.title)}`;
                  }}
                  key={movie.id}                                 
                  imagePath={movie.poster_path}
                  title={movie.title}
                  year={yearMovie[0]}
              ></TrendsCards> 
              );
            })
          }          
        </Container>
        <Pagination 
          style={{backgroundColor: "white"}} 
          defaultCurrent={1} 
          total={5000} 
          showSizeChanger={false}  
          onChange={pagination} 
          showQuickJumper={true}  
               
        ></Pagination>
      </>
  );
}

export { GenresPage }