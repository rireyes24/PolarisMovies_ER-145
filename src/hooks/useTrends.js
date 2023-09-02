import { useState, useEffect } from "react";
import { getTrends } from "../api/getTrends";
import { useIsLoading } from "./useLoading";

const useTrends = () => {
    
    const [trendsData, setTrendsData] = useState([]);
    const {isLoading, setIsLoading} = useIsLoading();

    useEffect(() => {
        getTrends()
            .then(data => {
                setTrendsData(data);
                setIsLoading(false);
                console.log('Yesss!!!!', isLoading);
            })
            .catch(error => {
                console.error(error);
            })
    }, [isLoading, setIsLoading])

    
    return {trendsData, isLoading};
}

export { useTrends };

