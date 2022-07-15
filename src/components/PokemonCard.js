import { Card, CardContent, CardHeader, CardMedia, Chip, Grid, IconButton } from '@mui/material'
import { Container } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';

import React from 'react'
import useFetchMulti from '../hooks/useFetchMulti';


const PokemonCard = () => {

  const { data: pokemon, isLoading, error } = useFetchMulti();
  
  console.log("Card: ", pokemon);
  
  return (   
    <Container maxWidth="lg" align="center">
      <Grid container spacing={3}>

      { error && <div> { error } </div>}
      { isLoading && <div> Loading... </div> }
      { pokemon &&          
          <Grid item key={ pokemon.order } xs={6} md={4} lg={3}>

            <Card sx={{ width: 210 }} >

              <CardHeader                
                action={
                  <IconButton>
                    <AddIcon sx={{ fontSize: "1.25rem" }} />
                  </IconButton>
                }

                title = { pokemon.name.toUpperCase()}                
                avatar = { pokemon.id.toString().padStart(3, "0") }
                sx={{ fontSize: "0.875rem", justifyContent: "center", pb: 0 }}
              /> 
              
                <CardMedia
                  component="img"
                  height={128}
                  sx={{ objectFit: "contain" }}
                  image= { pokemon.sprites.front_default }
                />          

                <CardContent sx={{ p: 0 }} component="div" align='center'>
                  
                  { pokemon.types.map( type => (                                                    
                    <Chip
                      className= { `types-${ type.type.name }-bg-color` }
                      key={ type.slot } 
                      label={ type.type.name.toUpperCase() }                                       
                      variant='outlined'
                      sx={{ mx: 0.5, mt: 2 }} />                                 
                  ))} 

                </CardContent>
      
            </Card>
           
          </Grid>        
      }
      
      </Grid>
    </Container>
    

    

    
  )
}

export default PokemonCard;


