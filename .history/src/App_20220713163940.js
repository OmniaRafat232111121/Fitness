import React from 'react'
import {Route,Routes} from"react-router-dom"
import {Box} from'@mui/material'
import './App.css'
import Navbar from './components/Navbar'
const App = () => {
  return (
<Box width ="400px">
<Navbar />
<Routes>
<Route path="/"  element={<H}/>
<Route path="/exercise:id"  element={<exerciseDetails />}/>
</Routes>
</Box>
  )
}

export default App
