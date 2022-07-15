import React from 'react'
import {Stack,Typpgraphy} from '@mui/material';
import Icon from '../assets/icons/gym.png'
const BodyParts = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack
    type="button" 
    alignItems="center"
    justifyContent="center"
    className="bod"

    >
    <img  src={Icon} alt="dumble"  style={{ width:"40px" ,height:"40px"}}/>


    </Stack>
  )
}

export default BodyParts