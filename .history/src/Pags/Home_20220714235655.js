import React from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exerise from '../components/Exerise'
const Home = () => {
  const [bodyPart,setBodyPart]=useState('all')
  const [exercises,setExercises]=useState([])

  return (
  <Box>
  <HeroBanner />
 <SearchExercise  setExercises={set} />
 
  </Box>
  );
}

export default Home