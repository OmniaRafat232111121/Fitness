import React, { useEffect, useState } from 'react';
;
import { BoxTypography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
// import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  //Pagination
  // const indexOfLastExercise = currentPage * exercisesPerPage;
  // const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  // const paginate = (event, value) => {
  //   setCurrentPage(value);

    // window.scrollTo({ top: 1800, behavior: 'smooth' });
  
  
  // if (!currentExercises.length) return '.:Loading';
  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
     
    
    </Box>
  );
};

export default Exercises;