import { styled } from 'styled-components';
import { MovieCards } from './MovieCards';
import { pathProcessor } from "../utils/pathProcessor";

const ScrollSlider = styled.div`
    position: relative;
    width: 100%;
    height: 460px;
    display: flex;
    align-items: center;
    overflow-y: hidden;
    transition: height .5s linear;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    padding-right: 20px;
`;

// eslint-disable-next-line react/prop-types
const MovieContainerSlider = ({movieData = []}) => {
    
    return(
        <>
            <ScrollSlider>
                {
                    movieData.map(movie => {
                            const yearMovie = movie.release_date.split('-')

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
            </ScrollSlider>       
        </>
    );
}


export { MovieContainerSlider }