import { styled } from 'styled-components';
import { pathProcessor } from '../utils/pathProcessor';



const ContainerNavBar = styled.section`
    width: 100%;
    height: 12vh;
    background-color: var(--Center-Brick);
    display: grid;
    align-items: center;
    justify-content: right;
    padding: 0% 2%;
`;



const ContainerMovies = styled.div`
    width: 320px;
    background-color: white;
    border-radius: 4px;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;    
    padding-bottom: 10px;
    z-index: 2;
`;

const ContainerMovie = styled.div`
    width: 280px;
    background-color: #f5f5f5;
    border-radius: 10px;
    margin-top: 12px;
    display: grid;
    grid-template-columns: 30% 70%;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
    box-shadow: 5px 4px 4px 0px rgba(0,0,0,0.63);
    -webkit-box-shadow: 5px 4px 4px 0px rgba(0,0,0,0.63);
    -moz-box-shadow: 5px 4px 4px 0px rgba(0,0,0,0.63);
    
`;

const Search = styled.input`
    width: 320px;
    height: 42px;
    background-color: white;
    padding-left: 20px;
    border: none;
    border-radius: 50px;
    margin-top: 40px;
    margin-right: 10px;
    color: var(--Top-Brick);
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
`;

const ImageMovie = styled.img`
    width: 48px;
    height: 100%;
    
    border-radius: 10px;
    object-fit: contain;
    justify-self: center;
`;

const ButtonMovie = styled.button`
    width: 90%;
    height: 90%;
    color: var(--Top-Brick);
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    background: transparent;
    border: none;
    cursor: pointer;
    letter-spacing: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
`;


// eslint-disable-next-line react/prop-types
const HeaderSearch = ({refMovie, searchMovie, searchValue, searchData}) => {

   return (
       
        <ContainerNavBar>
            <Search 
                ref={refMovie}
                onChange={searchMovie}
                value={searchValue}
                placeholder="Buscar Pelicula..."
            />
            <ContainerMovies>
                {
                    // eslint-disable-next-line react/prop-types
                    searchData.map(movie => (
                        <ContainerMovie key={movie.id}>
                            <ImageMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></ImageMovie>
                            <ButtonMovie 
                                onClick={() => {
                                    window.location.pathname = `/pelicula/${movie.id}-${pathProcessor(movie.title)}`;
                                }}
                            >
                                {movie.title}
                            </ButtonMovie>
                        </ContainerMovie>
                    ))            
                }                
            </ContainerMovies>    
        </ContainerNavBar>
    );
}

export { HeaderSearch };
