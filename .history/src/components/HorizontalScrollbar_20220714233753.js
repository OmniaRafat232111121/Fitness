import React from 'react'

const HorizontalScrollbar = ({data}) => {
  return (
    <div>
    {data.map((item)=>(
        <Box 
        key={item.i}
        >

        </Box>
    ))}
    </div>
  )
}

export default HorizontalScrollbar