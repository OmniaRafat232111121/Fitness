import React from 'react'
import {Route,Routes} from"react-router-dom"
import {Box} from'@mui/material'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pags/Home'
const App = () => {
  return (
<Box width ="400px">
<Navbar />
<Routes>
<Route path="/"  element={<Home/>}/>
<Route path="/exercise:id"  element={<ExerciseDe}/>
</Routes>
</Box>
  )
}

export default App
