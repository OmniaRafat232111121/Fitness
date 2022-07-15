import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseViedo from '../components/ExerciseViedo';
import Similarexercises from '../components/Similarexercises';

const ExerciseDetail = () => {
const [exerciseDetail,setExerciseDetail]=useState({});
const {id}=useParams();


  return (
    <Box>
    <Detail  exerciseDetail={exerciseDetail} />
     <ExerciseViedo />
    <Similarexercises />
    </Box>
  )
}

export default ExerciseDetail