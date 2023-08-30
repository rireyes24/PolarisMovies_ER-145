import { useState, useEffect } from "react";
import { getTrends } from "../api/getTrends";

const useTrends = () => {
    
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

    
    return trendsData;
}

export { useTrends };