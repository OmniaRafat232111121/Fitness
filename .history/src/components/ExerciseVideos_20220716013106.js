import React from 'react';

import { Typography, Box } from '@mui/material';
// import Loader from './Loader';


const ExerciseVideos = ({ exerciseVideos, name }) => {

  if (!exerciseVideos.length) return '...Loading';
  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography  
      varient="h2"
       sx={{ fontSize: { lg: '44px', xs: '25px' } }}
       fontWeight={700}
        color="#000" mb="33px">
        Watch <span 
        style={{
         color: '#FF2625',
         textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
    
      <Box sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
     
          <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
         
      
   
  </Box>
      

);
};

export default ExerciseVideos;