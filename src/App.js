import React from 'react'
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import PokemonCard from "./components/PokemonCard";
import Layout from "./components/Layout";

import NotFound from "./pages/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});


const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={ darkTheme }>
        
        <BrowserRouter>
          <Layout />
          
          <Routes>
          
            <Route exact path="/" element={ <PokemonCard /> } />
            <Route exact path="*" element={ <NotFound /> } />
            
          </Routes>
          
        </BrowserRouter>
        <CssBaseline />
      </ThemeProvider>
    </div>
  )
}

export default App;