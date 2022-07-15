import React from 'react'

const HorizontalScrollbar = ({data}) => {
  return (
    <div>
    {data.map((item)=>(
        <Box 
        key={item.id||ite}
        >

        </Box>
    ))}
    </div>
  )
}

export default HorizontalScrollbar