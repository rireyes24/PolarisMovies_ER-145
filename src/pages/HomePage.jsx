import { useState, useEffect } from "react";
import { getTrends } from "../api/getTrends";
import { TrendsCards } from "../components/TrendsCards";
import { styled } from "styled-components";
import { GenresTable } from "../components/GenresTable";


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



const Home = () => {

    const [trendsData, setTrendsData] = useState([]);

    useEffect(() => {
        getTrends()
            .then(data => {
                setTrendsData(data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return(
        <>
            <Container>
            <Title>Tendencias</Title>
            <TrendsScrollBar>
                {
                    trendsData.map(trend => {
                            const yearMovie = trend.release_date.split('-')

                            return(
                                <TrendsCards 
                                    key={trend.id}
                                    imagePath={trend.poster_path}
                                    title={trend.title}
                                    year={yearMovie[0]}
                                ></TrendsCards>
                            );
                    })
                }
            </TrendsScrollBar>
        </Container>

        <Container>
            <Title>Categorias</Title>
            <GenresTable>

            </GenresTable>
        </Container>
        </>
    );
}


export { Home }