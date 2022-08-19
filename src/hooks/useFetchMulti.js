import { useState, useEffect } from "react";

const useFetchMulti = () => {
    const [dataArray, setDataArray] = useState([]);    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [urlArray, seturlArray] = useState([])

    const getUrls = async () => {
        // Get All URLs //905 pokemons
        for (let id = 1; id <= 10; id++) {             
            urlArray.push(`https://pokeapi.co/api/v2/pokemon/${id}`);
        };
        console.log("urlArray: ", urlArray);               
        
        // Get All Data
        urlArray.map( async url => {
            const res = await fetch(url);
            if ( res.status !== 200) { throw new Error('Could not fetch the data.'); }
            const data = await res.json();
            dataArray.push(data);
        })
        setIsLoading(false);
    }    
    
    useEffect( () => {
        getUrls()
            .catch( err => {
                setError( err.message );
                setIsLoading(false);
            })
    }, [ ]) 
    
    return { dataArray, isLoading, error };
}

export default useFetchMulti;


