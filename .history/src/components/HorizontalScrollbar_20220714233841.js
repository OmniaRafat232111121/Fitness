import React from 'react'

const HorizontalScrollbar = ({data}) => {
  return (
    <div>
    {data.map((item)=>(
        <Box 
        key={item.id||item}
        itemId={item.id||item}
        title={item.id||item}
         m=""
        >
         {item}
        </Box>
    ))}
    </div>
  )
}

export default HorizontalScrollbar