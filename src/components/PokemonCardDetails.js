import { Card, CardContent, CardHeader, CardMedia, Chip, Grid, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const PokemonCardDetails = ({ childkey, title, avatar, image, types }) => {
  return (
         
        <Grid item key={ childkey } xs={6} md={4} lg={3}>
        <Card sx={{ width: 210 }} >
            <CardHeader                
              action={ <IconButton> <AddIcon sx={{ fontSize: "1.25rem" }} /> </IconButton> }
              title={ title }                
              avatar={ avatar }
              sx={{ fontSize: "0.875rem", justifyContent: "center", pb: 0 }}
            />
                        
            <CardMedia
              component="img"
              height={128}
              sx={{ objectFit: "contain" }}
              image= { image }
            />          

            <CardContent sx={{ p: 0 }} component="div" align='center'>                
            { types.map( type => (                                                    
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
      
  )
}

export default PokemonCardDetails