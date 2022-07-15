import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
const Exerise = () => {
  return (
   <Box id="exercises" 
   sx={{mt:{lg:'109px'}}} 
   mt="50px"
    p="20px">
    <Typography varient="h3" mb="46px">
    Showing Results
    </Typography>
    <Stack direction="row" 
    sx={{ gap:{lg:'110px',xs:'50px'}}}
    
    >
   
   
    </Stack>
   </Box>
  )
}

export default Exerise