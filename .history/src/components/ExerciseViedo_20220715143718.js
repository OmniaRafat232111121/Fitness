import React from 'react'
import {Stack,Stack,Typoraphy} from '@mui/material'
const ExerciseViedo = ({exerciseVideo,name}) => {
  return (
    <Box sx={{marginTop: {lg:'200px',xs:'20px'}}} p="20px">
     <Typoraphy varient="h4" mb="33px">
     watch  <span style={{color:'#ff2625'}}>{name} </span>exercise Viedos
     </Typoraphy>
    </Box>
  )
}

export default ExerciseViedo