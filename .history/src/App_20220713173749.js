import React from 'react'
import {Route,Routes} from"react-router-dom"
import {Box} from'@mui/material'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pags/Home'
import ExerciseDetail from './Pags/ExerciseDetail'
import Footer from './components/Footer'
const App = () => {
  return (
<Box width ="400px" sx={{width:{xl:'1488'}}}>
<Navbar />
<Routes>
<Route path="/"  element={<Home/>}/>
<Route path="/exercise:id"  element={<ExerciseDetail />}/>
</Routes>
<Footer />
</Box>
  )
}

export default App
