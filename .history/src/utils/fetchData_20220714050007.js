export const exerciseOptions= {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '878f45e1a8msh8bfaf3e377f7cf6p1e5423jsn6fa1e000179d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  }
};



export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };