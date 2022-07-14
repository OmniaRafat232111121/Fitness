import React from 'react'
import {Box,Button,Stack,TextField,Typography}  from '@mui/material'
const SearchExercise = () => {
  return (
    <Stack alignItems="center" mt="37px" padding="40px">
    <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}} mb= textalign="center">
    Awesome Exercises You <br /> Should Know
    </Typography>
    <Box position="realtive" mb="72px">
    <TextField 
    sx={{
      input:{fontWeight:'700',
      border:'none',
      borderRadius:'4px',
     width:{lg:'1170px',xs:'400px'}},
     backgroundColor:'#fff',
     borderRadius:'40px'

    }}
    height="76px"
    value=""
    onChange={(e)=>{}}
    placeholder="Search exercise"
    type="text"
    />
    <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
    Search
  </Button>
    </Box>
    </Stack>
  )
}

export default SearchExercise