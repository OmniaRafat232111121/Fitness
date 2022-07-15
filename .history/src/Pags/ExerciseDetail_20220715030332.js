import { Details } from '@mui/icons-material'
import React from 'react'
import {useParams} from 'react-router-dom'
import {exerciseOptions,fetchData} from '../utils/fetchData'
const ExerciseDetail = () => {
  return (
    <Box>
    <Details />
    <ExerciseViedo />
    
    </Box>
  )
}

export default ExerciseDetail