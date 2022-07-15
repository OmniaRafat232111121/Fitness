import { Details } from '@mui/icons-material'
import React,{useState,useEffe} from 'react'
import {useParams} from 'react-router-dom'
import Detail from '../components/Detail'
import ExerciseViedo from '../components/ExerciseViedo'
import Similarexercises from '../components/Similarexercises'
import {exerciseOptions,fetchData} from '../utils/fetchData'
const ExerciseDetail = () => {

  return (
    <Box>
    <Detail />
  <ExerciseViedo />
 <Similarexercises />
    </Box>
  )
}

export default ExerciseDetail