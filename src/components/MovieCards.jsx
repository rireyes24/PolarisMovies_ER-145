import { styled } from "styled-components";

const CardD = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 78% 14% 8%;
    width: 100%;
    min-width: 190px;
    max-width: 200px;
    height: 100%;
    max-height: 368px;
    border-radius: 10px;    
    scroll-snap-align: center;
    margin-left: 20px;
    background-color: white;
    overflow: hidden;
    cursor: pointer;
    animation: transform 5s ease-in-out;
    
    
    &:hover{
        transform: scale(1.06);
        animation: transform 5s ease-in-out;
    }
  
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`;


const TextBase = styled.h4`    
    color: var(--Top-Brick);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2%;
`;

const H5 = styled(TextBase)`
    font-size: 14px; 
    font-weight: 300;   
`

// eslint-disable-next-line react/prop-types
const MovieCards = ({imagePath, title, year, goMovie}) => {

    const completeImageURL = `https://image.tmdb.org/t/p/w500${imagePath}`;

    return(      
        <CardD
            onClick={() => goMovie()}
        >
            <Image src={completeImageURL} alt={title} />
            <TextBase>{title}</TextBase>
            <H5>({year})</H5>
        </CardD>
    );
}

export { MovieCards }