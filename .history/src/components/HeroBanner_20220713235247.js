import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
const HeroBanner = () => {
  return (
   <Box sx={{
    mt:{lg:'212px',xs:'70px'},
    ml:{sm:'50'}
   }}>
   <Typography color="#FF2625" fontWeight="600" fontSize="26px">FitnessClub</Typography>
   </Box>
  )
}

export default HeroBanner