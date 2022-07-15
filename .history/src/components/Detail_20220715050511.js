import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment'
const Detail = ({exerciseDetail}) => {
  const {bodyPart,gifUrl,name,target,equipment}=exerciseDetail;
  const exerciseDetail=[
    {
      icon:BodyPartImage,
      name:bodyPart
    },
    {
      icon:TargetImage,
      name:target
    },{
      icon:EquipmentImage,
      name:equipment,
    },
  ];
  return (
    <Stack gap="60px"  sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
     <img src={gifUrl} loading="lazy" className="detail-image" />
    </Stack>
  )
}

export default Detail