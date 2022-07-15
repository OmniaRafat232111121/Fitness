import React from 'react'
import {Box,Typography} from '@mui/material';
import BodyParts from './BodyParts';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const LeftArrow=()=>{
    const {scrollPrev}=useContext(VisibilityContext);

return(
    <Typography onClick={()=>scrolPrev()} >
    <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
);
};



const RightArrow=()=>{
    const {scrollNext}=useContext(VisibilityContext);

return(
    <Typography onClick={()=>scrolPrev()} className="left-arrow" >
    <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
);
};

const HorizontalScrollbar = ({data,bodyParts,setBodyPart,bodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RighrArrow}>
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