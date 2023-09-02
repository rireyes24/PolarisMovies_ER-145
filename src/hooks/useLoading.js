import { useState } from "react";

const useIsLoading = () => {

    const [isLoading, setIsLoading] = useState(true);

    return { isLoading, setIsLoading } 
}


export { useIsLoading }