import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

const Exercises = (exercises,setExercises,bodyPart) => {
 console.log(exercises)
  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
      {currentExercises.map((exercise, idx) => (
        <ExerciseCard key={idx} exercise={exercise} />
      ))}
    </Stack>
    <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
       <Exercise
       
      
    </Stack>
  </Box>
  )
}

export default Exercises