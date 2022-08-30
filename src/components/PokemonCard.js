import { Button, Grid } from '@mui/material'
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import PokemonCardDetails from './PokemonCardDetails';
// import useFetchMulti from '../hooks/useFetchMulti';

const PokemonCard = () => {     
  const [pokemons, setPokemons] = useState([]);    
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=50');

  useEffect( () => {    
    getUrls()
        .catch( err => {
            setError( err.message );
            setIsLoading(false);
        })
  }, [ ]) 

  const getUrls = async () => {
    const res = await fetch( url );
    if ( res.status !== 200) { throw new Error('Could not fetch the data.'); }
    const data = await res.json();           
    setUrl(data.next);
          
    const getPokemons = async results => {
      // loop all urls promises
      let allData = await Promise.all( 
        results.map( async pokemon => {
          const res = await fetch( pokemon.url );          
          if ( res.status !== 200) { throw new Error('Could not fetch the data.'); }
          const data = await res.json();
          return data;
        })
      )
      setPokemons(allData);
      setIsLoading(false);
    } 
    getPokemons(data.results);  
  };     

  
  return (   
    <Container maxWidth="lg" align="center">      
      <Grid container spacing={3}> 
        { error && <div> { error } </div>}
        { isLoading && <div> Loading... </div> }
       
        { pokemons && pokemons.map( (pokemon, index) => (          
          < PokemonCardDetails
            key={ index }
            childkey={ pokemon.order }
            title={ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}                
            avatar={ pokemon.id.toString().padStart(3, "0") }
            image= { pokemon.sprites.front_default }
            types= { pokemon.types }
          />
        ))}
      </Grid>

      <Button
        onClick={ () => getUrls() }        
        variant='outlined'
        sx={{  my: 5 }}
      > 
        Show more results
      </Button>

    </Container>       
  )

}

export default PokemonCard;


