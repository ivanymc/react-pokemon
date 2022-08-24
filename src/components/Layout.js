import { Box } from '@mui/material';
import React, { useState } from 'react'

import Navbar from './Navbar'
import SideDrawer from './SideDrawer'


const Layout = () => {

    const [isDrawerOpen, setisDrawerOpen] = useState(false);

  return (

    <Box>
      <Navbar setisDrawerOpen={ setisDrawerOpen } />
      <SideDrawer isDrawerOpen={ isDrawerOpen } setisDrawerOpen={ setisDrawerOpen } />
    </Box>
   
  )
}

export default Layout;