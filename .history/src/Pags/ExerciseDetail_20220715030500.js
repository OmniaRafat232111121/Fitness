import { Details } from '@mui/icons-material'
import React from 'react'
import {useParams} from 'react-router-dom'
import {exerciseOptions,fetchData} from '../utils/fetchData'
const ExerciseDetail = () => {
  return (
    <Box>
   
    <ExerciseViedo />
    <Similarexercises />
    </Box>
  )
}

export default ExerciseDetail