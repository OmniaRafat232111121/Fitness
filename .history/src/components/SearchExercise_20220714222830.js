import React,{useState} from 'react'
import {Box,Button,Stack,TextField,Typography}  from '@mui/material'
import { fetchData,exerciseOptions} from '../utils/fetchData'
const SearchExercise = () => {
    const [search,setSearch]=useState("")
    const [exercises,setExercises]=useState([])
    useEffect(()=>{
      const fetchexercisedata=aync()=>{
        const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      }
      },[])
      
    
    const handleSearch=async()=>{
      const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
     const searchExercies=exerciseData.filter((exercise)=>
     exercise.name.toLowerCase().includes(search)
     ||exercise.target.toLowerCase().includes(search)
    || exercise.equipment.toLowerCase().includes(search)
    ||  exercise.bodyPart.toLowerCase().includes(search)

     );
     setSearch('');
     setExercises(searchExercies)
    }
  
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
      Awesome Exercises You <br /> Should Know
    </Typography>
    <Box position="relative" mb="72px">
      <TextField
        height="76px"
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
      />
      <Button className="search-btn" 
      sx={{
      bgcolor: '#FF2625',
      color: '#fff',
      textTransform: 'none',
       width: { lg: '173px', xs: '80px' }, 
      height: '56px',
      position: 'absolute', 
      right: '0px',
     fontSize: { lg: '20px', xs: '14px' }}} 
      onClick={handleSearch}  >
        Search
      </Button>
    </Box>
    </Stack>
  )
}

export default SearchExercise