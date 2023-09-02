import { styled } from "styled-components";

const CardD = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 80% 15% 5%;
    width: 100%;
    height: 368px;
    border-radius: 10px;
    min-width: 190px;
    max-width: 200px;
    scroll-snap-align: center;
    margin-left: 20px;
    background-color: white;
    overflow: hidden;
    cursor: pointer;
`

const Image = styled.img`
    width: 100%;
    object-fit: contain;
    overflow: hidden;
`;

const H3 = styled.h4`
    color: var(--Top-Brick);
`
const H5 = styled.h5`
    color: var(--Top-Brick);
`

// eslint-disable-next-line react/prop-types
const TrendsCards = ({imagePath, title, year, goMovie}) => {

    const completeImageURL = `https://image.tmdb.org/t/p/w500${imagePath}`;

    return(      
        <CardD
            onClick={() => goMovie()}
        >
            <Image src={completeImageURL} alt={title} />
            <H3>{title}</H3>
            <H5>{year}</H5>
        </CardD>
    );
}

export { TrendsCards }


//     scroll-snap-align: center;
