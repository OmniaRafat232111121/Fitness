import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
   <Stack>
   <Link to="/"> 
  <img  src={Logo} alt="logo" style={{width:'48px',height:'48px',margin:'0 20px'}}/>
  </Link>
  <Stack direction="row" gap="40px" fontSize:"24px"  alignItems="flex-end">
  <Link to="/">Home</Link>
  <a   href="#exercises" style={{textDecoration:'none' ,color:'#3A1212'}}>Exercise </a>
 </Stack>
 </Stac
  )
}

export default Navbar