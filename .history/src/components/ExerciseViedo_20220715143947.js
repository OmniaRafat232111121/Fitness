import React from 'react'
import {Stack,Stack,Typoraphy} from '@mui/material'
const ExerciseViedo = ({exerciseVideo,name}) => {
  return (
    <Box sx={{marginTop: {lg:'200px',xs:'20px'}}} p="20px">
     <Typoraphy varient="h4" mb="33px">
     watch  <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name} </span>exercise Viedos
    
     </Typoraphy>

     <Stack justifyContent="flex-start" flex-wrap="wrap" align-items="center" 
     sx={{
      flexDirection:{lg:'row'},
      
     }}> 

     </Stack>
    </Box>
  )
}

export default ExerciseViedo