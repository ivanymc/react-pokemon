import { useState, useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/25");        
        if ( res.status !== 200) { throw new Error('Could not fetch the data.'); }
        const data = await res.json();
        setData(data);
        setIsLoading(false);
    }

    useEffect( () => {
        getData()
            .catch( err => {
                setError( err.message );
                setIsLoading(false);
            })
    }, [ ])
    

    return { data, isLoading, error };
}

export default useFetch;