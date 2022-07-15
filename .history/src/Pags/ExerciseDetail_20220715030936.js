import { Details } from '@mui/icons-material'
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Detail from '../components/Detail'
import ExerciseViedo from '../components/ExerciseViedo'
import Similarexercises from '../components/Similarexercises'
import {exerciseOptions,fetchData} from '../utils/fetchData'
const ExerciseDetail = () => {
const [exerciseDetail,setExerciseDetail]=useState({});
const {id}=useParams();
us
  return (
    <Box>
    <Detail />
  <ExerciseViedo />
 <Similarexercises />
    </Box>
  )
}

export default ExerciseDetail