import React from 'react'
import {Box} from '@mui/material';
import BodyParts from './BodyParts';
const HorizontalScrollbar = ({data,bodyParts,setBodyPart}) => {
  return (
    <div>
    {data.map((item)=>(
        <Box 
        key={item.id||item}
        itemId={item.id||item}
        title={item.id||item}
         m="0 40px"
        >
         <BodyParts  item={item} bodyParts/>
        </Box>
    ))}
    </div>
  )
}

export default HorizontalScrollbar