export const exerciseOptions= {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
   
    'X-RapidAPI-Host':'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': Process.env.REACT_APP_RAPID_API-KEY



    
  }
};



export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };