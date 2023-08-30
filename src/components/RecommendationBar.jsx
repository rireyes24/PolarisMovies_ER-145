
import { useMovieRecommendations } from '../hooks/useMovieRecommendations'
import { TrendsCards } from "../components/TrendsCards";
import { pathProcessor } from "../utils/pathProcessor";


const RecommendationBar = () => {
    
    const dataRecommendations = useMovieRecommendations();
    console.log(dataRecommendations);

    return(
        <>
            {                        
                dataRecommendations.map(recommedation => {
                    
                    const yearMovie = recommedation.release_date.split('-')

                    return(
                        <TrendsCards
                            goMovie={() => {
                                window.location.pathname = `pelicula/${recommedation.id}-${pathProcessor(recommedation.title)}`;
                            }}
                            key={recommedation.id}                                 
                            imagePath={recommedation.poster_path}
                            title={recommedation.title}
                            year={yearMovie[0]}
                        ></TrendsCards>
                    )
                })
            }
        </>
    );
}


export { RecommendationBar }