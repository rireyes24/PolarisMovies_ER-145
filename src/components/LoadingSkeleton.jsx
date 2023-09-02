import { styled } from "styled-components";

const Container = styled.section`
    width: 100%;
    height: 580px;
    background-color: var(--Center-Brick);    
    margin: 0 auto;
    margin-top: 40px;  
    padding-top: 20px;
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
    background-color: #999999;
    overflow: hidden;
    cursor: pointer;
`

const LoadingSkeleton = () => {

    const loadingItems = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

    return(
        <>
            <Container>
                <Title>Tendencias</Title>
                <TrendsScrollBar>
                    {
                        loadingItems.map(trend => {
                                return(                               
                                    <CardD                                        
                                        key={trend.id}
                                    ></CardD> 
                                );
                        })
                    }
                </TrendsScrollBar>
            </Container>

            <Container>
                <Title></Title>
                <TrendsScrollBar></TrendsScrollBar>
            </Container>
        </>
    )
}

export { LoadingSkeleton }