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
   <Typography  fontSize='22px' fontFamily="Alegreya" lineHeight="35px"  mt={4 } mb={3}>   
   Check out the most effective exercises personalized to you
   </Typography>
    
  
   <Button  href="#exercise" variant="contained" color="error" sx={{backgroundColor:'#ff'}}>Explore Exercise</Button>


   <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
   </Box>
  )
}

export default HeroBanner