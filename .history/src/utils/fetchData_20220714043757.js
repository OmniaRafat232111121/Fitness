export const exercise


export const fetchData=aync(url,options)=>{
    const response=await fetch(url,oprions);
    const data=await response.json();
    return data;
}
