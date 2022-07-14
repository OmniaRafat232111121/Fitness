import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
const HeroBanner = () => {
  return (
   <Box sx={{
    mt:{lg:'212px',xs:'70px'},
    ml:{sm:'90px'}
   }} position="realtive"  p="20px">
   <Typography color="#FF2625" fontWeight="600" fontSize="26px">FitnessClub</Typography>
   <Typography fontweight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}}> Sweat,Smile<br />
   And Repeat  </Typography>
 <Typography style={{fontSize:'22px' ,fontFamily:"Alegreya", lineHeight:"35px"}}>   
   Check out the most effective exercises personalized to you
   </Typography>
    
   <Stack>
   <a style={{color:"FF2625", fontWeight:"600px"}} sx={{opacity}}>Explore Exercise</a>
   </Stack>
   </Box>
  )
}

export default HeroBanner