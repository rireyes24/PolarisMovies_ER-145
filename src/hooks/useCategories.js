import { useEffect, useState } from "react"
import { getCategories } from '../api/getCategories'
import { useIsLoading } from "./useLoading";


const useCategories = () => {
    const [dataCategories, setDataGenres] = useState([]);

    const { setIsLoading } = useIsLoading();

    useEffect(() => {
        getCategories()
        .then(categories => {        
            setIsLoading(false);
            setDataGenres(categories.genres);       
        })
        .catch(error => {
            console.error(error);
        })
    }, [setIsLoading])

    return dataCategories;
}

export { useCategories }