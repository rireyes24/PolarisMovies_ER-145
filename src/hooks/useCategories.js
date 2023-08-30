import { useEffect, useState } from "react"
import { getCategories } from '../api/getCategories'


const useCategories = () => {
    const [dataCategories, setDataGenres] = useState([]);

    useEffect(() => {
        getCategories()
        .then(categories => {
            setDataGenres(categories.genres);
        })
        .catch(error => {
            console.error(error);
        })
    }, [])

    return dataCategories;
}

export { useCategories }