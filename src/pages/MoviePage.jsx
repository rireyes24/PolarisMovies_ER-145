import { Image } from "antd";
import { styled } from "styled-components";
import { StarFilled } from "@ant-design/icons";

const ContainerMovie = styled.section`
    width: 100%;
    height: 88vh;
    background-color: #123E35;
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 14% 18% 40% 14% 14%;
    padding: 0% 2%;
`;

const ContainerImage = styled.div`
    height: 80%;
    grid-column: 1 / 2;
    grid-row: 1 / 5;
    justify-self: center;
    align-self: center;   
    background-color: blue;
`;

const Title = styled.h2`
    width: 80%;
    height: 80px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    align-items: center;
    font-size: 42px;
    align-self: center;
`;

const ContainerVote = styled.div`
    width: 14%;
    height: 40%;
    display: flex;
    justify-content: space-around;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-self: right;
    align-self: center;
`;

const ContainerDescription = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    grid-column: 2 / 3;
    grid-row: 3 / 4;    
`;

const ContainerRelease = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    grid-column: 1 / 2;
    grid-row: 5 / 6;    
`;

const ContainerGenres = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    grid-column: 2 / 3;
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
                    <h3>{voteAverage}</h3>
                </ContainerVote>                    
                <ContainerImage>                    
                    <Image 
                        height={'100%'}          
                        src={completeImageURL}
                    ></Image>                    
                </ContainerImage>
                <ContainerDescription>
                    <Text>Descripción</Text>
                    <Description>{description}</Description>
                </ContainerDescription>
                <ContainerRelease>
                    <Text>Release Date</Text>
                    <Description>{releaseDate}</Description>
                </ContainerRelease>
                <ContainerGenres>
                    <Text>Genres</Text>
                    <Description>{
                        // eslint-disable-next-line react/prop-types
                        genres.map(genre => (
                            <span key={genre.id}>{genre.name}</span>
                        ))
                    }</Description>
                </ContainerGenres>
            </ContainerMovie>            
        </>
    );
}

export { MoviePage }