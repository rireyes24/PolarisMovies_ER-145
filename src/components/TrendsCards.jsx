
import { Card } from "antd"
const { Meta } = Card;



// eslint-disable-next-line react/prop-types
const TrendsCards = ({imagePath, title, year, goMovie}) => {

    const completeImageURL = `https://image.tmdb.org/t/p/w500${imagePath}`;

    return(
        <Card 
            onClick={() => goMovie()}
            hoverable
            cover={<img alt={title} src={completeImageURL} />}
            style={{
                position: 'relative',
                width: '100%',
                minWidth: '190px',
                maxWidth: '300px',
                scrollSnapAlign: 'center',
                marginLeft: '20px',                
            }}
        >
            <Meta title={title} description={year}></Meta>
        </Card>
    );
}

export { TrendsCards }


//     scroll-snap-align: center;
