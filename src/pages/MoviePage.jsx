import { Image } from "antd";
import { styled } from "styled-components";
import { StarFilled } from "@ant-design/icons";
import { RecommendationBar } from "../components/RecommendationBar";
import { deleteDecimal } from "../utils/deleteDecimalAverage";

const ContainerMovie = styled.section`
    width: 100%;
    height: 1200px;
    background-color: var(--Center-Brick);
    display: grid;
    grid-template-columns: 30% 10% 60%;
    grid-template-rows: 4% 8% 20% 14% 8% 4% 38%;
    padding: 0% 2%;
`;

const ContainerImage = styled.div`
    height: 90%;
    grid-column: 1 / 2;
    grid-row: 2 / 5;
    justify-self: center;
    align-self: center;       
    object-fit: contain;
`;

const Title = styled.h2`
    width: 80%;
    height: 80px;
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    display: flex;
    align-items: center;
    font-size: 32px;
    align-self: top;
    text-align: left;
`;

const ContainerVote = styled.div`
    width: 60px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    justify-self: right;
    align-self: center;
`;

const ContainerDescription = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-self: center;
    grid-column: 3 / 4;
    grid-row: 3 / 4;    
`;

const ContainerGenres = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    grid-column: 3 / 4;
    grid-row: 4 / 5;    
`;

const ContainerRelease = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-self: center;
    grid-column: 3 / 4;
    grid-row: 5 / 6;    
`;


const Text = styled.h3`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 4%;
`;

const Description = styled.p`
    width: 80%;
    height: 100%;
    align-self: center;
    padding: 2%;
    text-align: left;
    word-wrap: break-word; /* Divide palabras largas en varias líneas */
    overflow-wrap: break-word; 
`;

const Genres = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ContainerRecommendations = styled.div`
    width: 100%;
    height: 440px;
    display: flex;
    grid-column: 1 / 4;
    grid-row: 7 / 8;   
    position: relative;
    overflow-y: hidden;
    transition: height .5s linear;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    padding: 20px 10px;
    margin-bottom: 40px;
    align-self: center;

`;

// eslint-disable-next-line react/prop-types, no-unused-vars
const MoviePage = ({title, imagePath, description, voteAverage, releaseDate, genres}) => {

    const completeImageURL = `https://image.tmdb.org/t/p/w500${imagePath}`;   

    return(
        <>            
            <ContainerMovie>     
                <Title>{title}</Title>
                <ContainerVote>
                    <StarFilled
                        style={{
                            color: 'gold',
                            fontSize: '40px'
                        }}
                    />
                    <h3>{deleteDecimal(voteAverage) || 0}</h3>
                </ContainerVote>                    
                <ContainerImage>                    
                    <Image 
                        height={'100%'}          
                        src={completeImageURL}
                    ></Image>                    
                </ContainerImage>
                <ContainerDescription>
                    <Text>DESCRIPTION</Text>
                    <Description>{description}</Description>
                </ContainerDescription>
                <ContainerRelease>
                    <Text>RELEASE DATE</Text>
                    <Description>{releaseDate}</Description>
                </ContainerRelease>
                <ContainerGenres>
                    <Text>CATEGORIES</Text>
                    <Description>{
                        // eslint-disable-next-line react/prop-types
                        genres.map(genre => (
                            <Genres key={genre.id}>
                                <h4>{genre.name}</h4>
                            </Genres>
                        ))
                    }</Description>
                </ContainerGenres>
                <ContainerRecommendations>
                   <RecommendationBar></RecommendationBar>
                </ContainerRecommendations>
            </ContainerMovie>            
        </>
    );
}

export { MoviePage }