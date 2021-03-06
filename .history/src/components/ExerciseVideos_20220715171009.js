import React from 'react';
import { Typography, Box, Stack } from '@mui/material';


const ExerciseVideos = ({ exerciseVideos, name }) => {


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
       <Stack justifyContent="flex-start" flexWrap="wrap" alignItems='center'
       sx={{flexDirection:{lg:'row'},
       gap:{lg:'110px',xs:'0'}
        }
  
      }>
      {exerciseVideos?.slice(0,3).map((item,index)=>{
        <a  key={index} classNam/>
      })}

       </Stack>
    </Box>
  );
};

export default ExerciseVideos;