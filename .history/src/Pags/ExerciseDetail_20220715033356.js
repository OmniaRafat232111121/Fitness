
import { Box} from '@mui/material';;

import {useParams} from 'react-router-dom'
import Detail from '../components/Detail'
import ExerciseViedo from '../components/ExerciseViedo'
import Similarexercises from '../components/Similarexercises'
import {exerciseOptions,fetchData} from '../utils/fetchData'
const ExerciseDetail = () => {
const [exerciseDetail,setExerciseDetail]=useState({});
const {id}=useParams();
useEffect(()=>{
const fetchExerciseDetail=async()=>{
const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
const toutubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';

const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
setExerciseDetail(exerciseDetailData);

}
fetchExerciseDetail();
},[id])
  return (
    <Box>
    <Detail  exerciseDetail={exerciseDetail} />
  <ExerciseViedo />
 <Similarexercises />
    </Box>
  )
}

export default ExerciseDetail