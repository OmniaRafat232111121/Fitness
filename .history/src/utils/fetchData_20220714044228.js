export const exerciseoptions= {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': Process.e
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData=aync(url,options)=>{
    const response=await fetch(url,oprions);
    const data=await response.json();
    return data;
}
