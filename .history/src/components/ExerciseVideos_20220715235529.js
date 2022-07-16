import React from 'react';
import { Typography, Box, Stack } from '@mui/material';


const ExerciseVideos = ({ exerciseVideos, name }) => {

  if (!exerciseVideos.length) return '...Loading'
  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography  
      varient="h2"
        }}>{name}</span> exercise videos
      </Typography>
     


  </Box>   

);
};

export default ExerciseVideos;