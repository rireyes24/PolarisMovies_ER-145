import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { pathProcessor } from '../utils/pathProcessor';

const { Search } = Input;

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
    height: 80px;
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

const ImageMovie = styled.img`
    width: 48px;
    height: 100%;
    
    border-radius: 10px;
    object-fit: contain;
    justify-self: center;
`;

// eslint-disable-next-line react/prop-types
const NavBar = ({refMovie, searchMovie, searchValue, searchData, movieSelected, searchID}) => {

   

    return (
       
        <ContainerNavBar>
            <Search 
                ref={refMovie}
                onChange={searchMovie}
                value={searchValue}
                placeholder="Buscar Pelicula..." 
                onSearch={''} 
                enterButton=''
                size='large'
                style={{
                    width: 300,
                }}
            />
            <ContainerMovies>
                {
                    // eslint-disable-next-line react/prop-types
                    searchData.map(movie => (
                        <ContainerMovie key={movie.id}>
                            <ImageMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></ImageMovie>
                            <Link 
                                style={{
                                    textAlign: 'left',
                                    color: '#323232',
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                    textDecoration: 'none',
                                }}
                                onClick={() => {
                                    movieSelected(movie);
                                    searchID();
                                    window.location.assign();
                                }} to={`pelicula/${searchID()}`}>{movie.title}</Link>
                        </ContainerMovie>
                    ))            
                }                
            </ContainerMovies>    
        </ContainerNavBar>
    );
}

export { NavBar };
