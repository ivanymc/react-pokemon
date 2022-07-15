import { useState, useEffect } from "react";

const useFetchMulti = () => {
    const [data, setData] = useState("");    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const getUrls = async () => {
        for (let id = 1; id <= 5; id++) { 
            await getDatas(`https://pokeapi.co/api/v2/pokemon/${id}`); }
    }    

    const getDatas = async (url) => {
        console.log("getdatas: ", url);
        const res = await fetch(url);
        if ( res.status !== 200) { throw new Error('Could not fetch the data.'); }
        const data = await res.json();
        setData(data);
        setIsLoading(false);
    }    

    useEffect( () => {
        getUrls()
            .catch( err => {
                setError( err.message );
                setIsLoading(false);
            })
    }, [ ]) 
    

    return { data, isLoading, error };
}

export default useFetchMulti;

