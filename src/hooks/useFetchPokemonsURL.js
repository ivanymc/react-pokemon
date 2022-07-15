import { useEffect, useState } from "react"


const useFetchPokemonsURL = () => {

    const [ url, setUrl ] = useState([]);
    const [ data, setData ] = useState([]);
    const pokemonNumber = 5;

    useEffect( () => {
        const fetchPokemonsID = async () => {
            for ( let id = 1; id <= pokemonNumber; id++ ) 
                { await fetchPokemonsURL(id) }
          }
        
        const fetchPokemonsURL = async (id) =>  {
            setUrl( url => [ ...url, `https://pokeapi.co/api/v2/pokemon/${id}` ] );
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
            console.log("url: ", data);
        }
    }, [ ]); 
  
    

    
    
    return { data };
}

export default useFetchPokemonsURL;