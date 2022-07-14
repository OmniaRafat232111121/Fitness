import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import HeroBannerImage from  '../assets/images/banner.png'
const HeroBanner = () => {
  return (
   <Box sx={{
    mt:{lg:'212px',xs:'70px'},
    ml:{sm:'90px'}
   }} position="realtive"  p="20px">
   <Typography color="#FF2625" fontWeight="600" fontSize="26px">FitnessClub</Typography>
   <Typography fontweight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}}> Sweat,Smile<br />
   And Repeat  </Typography>
   <Typography  fontSize='22px' fontFamily="Alegreya" lineHeight="35px"   mb={3}>   
   Check out the most effective exercises personalized to you
   </Typography>
    
  
   <Button  href="#exercise" variant="contained" color="error"  padding="10px" sx={{backgroundColor:'#ff2625'}}>Explore Exercise</Button>
    <Typography fontWeight={600} color="#ff2625" sx={{opacity:0.1,
    displa}}>
    Exercise
    </Typography>

   <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
   </Box>
  )
}

export default HeroBanner