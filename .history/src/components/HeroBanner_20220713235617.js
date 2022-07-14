import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
const HeroBanner = () => {
  return (
   <Box sx={{
    mt:{lg:'212px',xs:'70px'},
    ml:{sm:'90px'}
   }} position="realtive"  p="20px">
   <Typography color="#FF2625" fontWeight="600" fontSize="26px">FitnessClub</Typography>
   <Typography fontweight={700} sx={{fontSize:{lg:'44px',xs}}}> Sweat,Smile<br />
   And Repeat  </Typography>
  
   </Box>
  )
}

export default HeroBanner