import React,{useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import exercises from '../components/Exercises'
const Home = () => {
  const [bodyPart,setBodyPart]=useState('all')
  const [exercises,setExercises]=useState([])

  return (
  <Box>
  <HeroBanner />
 <SearchExercise  setExercises={setExercises} bodyPart={bodyPart}  setBodyPart={setBodyPart}/>
   <   setExercises={setExercises}  exercises={exercises} bodyPart={bodyPart}  />
  </Box>
  );
}

export default Home