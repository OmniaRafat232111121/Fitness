import React from 'react'
import {Box,Button,Stack,TextField,Typography}  from '@mui/material'
const SearchExercise = () => {
  return (
    <Stack alignItems="center" mt="37px" padding="40px">
    <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}}  textalign="center">
    Awesome Exercises You <br /> Should Know
    </Typography>
    <Box position="realtive" mb="72px">
    <TextField 
    sx={{
      input:{fontWeight:'700',border:'none',borderRadius:}
    }}
    height="76px"
    value=""
    onChange={(e)=>{}}
    placeholder="Search exercise"
    type="text"
    />
    </Box>
    </Stack>
  )
}

export default SearchExercise