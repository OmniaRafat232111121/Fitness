import React from 'react'
import {Box} from '@mui/material';
import BodyParts from './BodyParts';
import 
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const leftArrow=()=>{
    const {scrollPrev}=useContext(VisibilityContext);
}
return(
    <
)
const HorizontalScrollbar = ({data,bodyParts,setBodyPart,bodyPart}) => {
  return (
    <ScrollMenu>
    {data.map((item)=>(
        <Box 
        key={item.id||item}
        itemId={item.id||item}
        title={item.id||item}
         m="0 40px"
        >
         <BodyParts  item={item}  data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
        </Box>
    ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar