import { TrendsCards } from "../components/TrendsCards";
import { styled } from "styled-components";
import { GenresTable } from "../components/GenresTable";
import { pathProcessor } from "../utils/pathProcessor";
import { useTrends } from "../hooks/useTrends";
import { LoadingSkeleton } from "../components/LoadingSkeleton";

const Container = styled.section`
    width: 100%;
    height: 580px;
    background-color: var(--Center-Brick);    
    margin: 0 auto;
    margin-top: 40px;  
`;

const TrendsScrollBar = styled.div`
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
                <TrendsScrollBar>
                    {
                        trendsData.map(trend => {
                                const yearMovie = trend.release_date.split('-')

                                return(                               
                                    <TrendsCards
                                        goMovie={() => {
                                            window.location.pathname = `pelicula/${trend.id}-${pathProcessor(trend.title)}`;
                                        }}
                                        key={trend.id}                                 
                                        imagePath={trend.poster_path}
                                        title={trend.title}
                                        year={yearMovie[0]}
                                    ></TrendsCards> 
                                );
                        })
                    }
                </TrendsScrollBar>
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