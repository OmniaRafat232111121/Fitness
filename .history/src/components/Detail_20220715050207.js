import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment'
const Detail = ({exerciseDetail}) => {
  const {bodyPart,name,target,equipment}=exerciseDetail;
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
      name:eq
    }
  ]
  return (
    <div>Detail</div>
  )
}

export default Detail