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
useEffect(()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });

const fetchExerciseData=async()=>{
  const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
  const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

 const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

}
fetchExerciseDetail();
},[id])
  return (
    <Box>
    <Detail  exerciseDetail={exerciseDetail} />
     <ExerciseViedo />
    <Similarexercises />
    </Box>
  )
}

export default ExerciseDetail