import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'

const TEST = () => {

    const [pokemons, setPokemons] = useState([]);    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    useEffect( () => {    
    getUrls()
        .catch( err => {
            setError( err.message );
            setIsLoading(false);
        })
    }, [ ])
    
    const getUrls = async () => {
        const res = await fetch(url);
        if ( res.status !== 200) { throw new Error('Could not fetch the data.'); }
        const data = await res.json();           
        setUrl(data.next);
        setPokemons(data.results);
    }

    console.log(pokemons);

  return (
    <Container maxWidth="lg" align="center">
        { pokemons && pokemons.map( pokemon => (
            <div> { pokemon.name } </div>
        ))

        /*
        (pokemons.results).map( (pokemon, index) => {
            <Grid item key={ index } xs={6} md={4} lg={3}>
                <div> {pokemon.name} </div>
            </Grid>
        */
        }
    
    </Container>
  )
}

export default TEST