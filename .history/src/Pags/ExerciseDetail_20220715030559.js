import { Details } from '@mui/icons-material'
import React from 'react'
import {useParams} from 'react-router-dom'
import Detail from '../components/Detail'
import ExerciseViedo from '../components/ExerciseViedo'
import {exerciseOptions,fetchData} from '../utils/fetchData'
const ExerciseDetail = () => {
  return (
    <Box>
    <Detail />
<ExerciseViedo />
    <Similarex
    </Box>
  )
}

export default ExerciseDetail