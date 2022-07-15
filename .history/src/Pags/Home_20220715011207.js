import React,{useState} from 'react'
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
 <SearchExercise  setExercises={setExercises} bodyPart={bodyPart}  setBodyPart={setBodyPart}/>
   <Exerise   setExercises={setExercises}  exer bodyPart={bodyPart}  setBodyPart={setBodyPart} />
  </Box>
  );
}

export default Home