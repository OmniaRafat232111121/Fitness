import React from 'react'
import {Stack,Typpgraphy} from '@mui/material';
import Icon from '../assets/icons/gym.png'
const BodyParts = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack
    type="button" 
    alignItems="center"
    justifyContent="center"

    >
    <img  src={Icon} alt="" />


    </Stack>
  )
}

export default BodyParts