import { styled } from "styled-components";
import { MovieContainerSlider } from "../components/MovieContainerSlider";
import { GenresTable } from "../components/CategoriesTable";
import { useTrends } from "../hooks/useTrends";
import { LoadingSkeleton } from "../components/LoadingSkeleton";


const Container = styled.section`
    width: 100%;
    background-color: var(--Center-Brick);    
    margin: 0 auto;
    margin-top: 40px;  
    padding-bottom: 40px;
`;

const Title = styled.h2`
    width: 80%;
    height: 100px;   
    display: flex;
    align-items: center;
    font-size: 42px;
    align-self: center;
    padding-top: 2%;
    padding-left: 4%;
`;


// eslint-disable-next-line react/prop-types
const Home = ({ setDataCategory }) => {

    const {trendsData, isLoading} = useTrends();  

    return(
        <>
            {isLoading ? <LoadingSkeleton></LoadingSkeleton> : <Container>
                <Title>Tendencias</Title>
                <MovieContainerSlider
                    movieData={trendsData}
                >                   
                </MovieContainerSlider>
            </Container>}

            {isLoading ? <LoadingSkeleton></LoadingSkeleton> : <Container>
                <Title>Categorias</Title>
                <GenresTable
                    setDataCategory={setDataCategory}
                >
                </GenresTable>
            </Container>}
        </>
    );
}


export { Home }