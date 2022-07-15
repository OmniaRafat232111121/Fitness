import React from 'react'
import {Stack,Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png'
const BodyParts = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack
    type="button" 
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
        {

    }}

    >
    <img  src={Icon} alt="dumble"  style={{ width:"40px" ,height:"40px"}}/>

    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyParts