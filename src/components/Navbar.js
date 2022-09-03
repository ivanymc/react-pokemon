import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';


const Navbar = ({ setisDrawerOpen }) => {

    return ( 
        <>      
          <Box sx={{ mb: 11 }}>
            <AppBar position="fixed" component="nav" sx={{  opacity: 0.85 }}>
              <Toolbar>
                <Box sx={{ 
                    mr: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                    <IconButton onClick={ () => setisDrawerOpen(true) }>
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ ml: 1 }}                            
                    > 
                        Pokemon
                    </Typography>
                </Box>                   

                <Box>
                    <Button variant='outlined' disabled> Login </Button>    
                </Box>                    

              </Toolbar>
            </AppBar>
          </Box>
        </>
        
            


     );
}
 
export default Navbar;