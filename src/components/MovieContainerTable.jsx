import { styled } from "styled-components";
import { MovieCards } from "./MovieCards";
import { pathProcessor } from "../utils/pathProcessor";

const ContainerTable = styled.section`
  width: 100%;
  background-color: var(--Center-Brick);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 40px;
  padding: 80px 40px;
  gap: 32px;
`;

// eslint-disable-next-line react/prop-types
const MovieContainerTable = ({ movieData = [] }) => {
    return(
        <ContainerTable>
          {
            movieData.map(movie => {
              const yearMovie = movie.release_date.split('-');
              return(
                <MovieCards
                  goMovie={() => {
                      window.location.pathname = `pelicula/${movie.id}-${pathProcessor(movie.title)}`;
                  }}
                  key={movie.id}                                 
                  imagePath={movie.poster_path}
                  title={movie.title}
                  year={yearMovie[0]}
              ></MovieCards> 
              );
            })
          }          
        </ContainerTable>
    )
}

export { MovieContainerTable }
