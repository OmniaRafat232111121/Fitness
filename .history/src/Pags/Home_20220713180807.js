import React from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exerise from '../components/Exerise'
const Home = () => {
  return (
  <Box>
  <HeroBanner />
   <SearchExercise />
   <Exerise />
  </Box>
  )
}

export default Home