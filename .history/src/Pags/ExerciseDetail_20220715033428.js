
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