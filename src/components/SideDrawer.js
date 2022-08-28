import { Box, Drawer } from '@mui/material'
import React from 'react'

const SideDrawer = ({ isDrawerOpen, setisDrawerOpen }) => {

  return (

    <Box>
      <Drawer
        anchor="left"
        open={ isDrawerOpen }
        onClose={ () => setisDrawerOpen(false) }
      >

      <Box sx={{ width: 250 }}> 
          Hello 
      </Box>
      
      </Drawer>
    </Box>
  )
}

export default SideDrawer;