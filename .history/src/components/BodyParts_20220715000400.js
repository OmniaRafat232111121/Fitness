import React from 'react'
import {Stack,Typpgraphy} from '@mui/material';
import Icon from '../assets/icons/gy'
const BodyParts = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack
    type="button" 
    alignItems="center"
    justifyContent="center"

    >
    <img  src={Icon} />


    </Stack>
  )
}

export default BodyParts