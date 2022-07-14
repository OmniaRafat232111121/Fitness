import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
const HeroBanner = () => {
  return (
   <Box sx={{
    mt:{lg:'212px',xs:'70'}
   }}>
   <Typography color="#FF2625" fontWeight="600" fontSize="26px">FitnessClub</Typography>
   </Box>
  )
}

export default HeroBanner