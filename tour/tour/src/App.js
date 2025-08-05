import React, { useEffect, useState } from 'react'
import Loading from './loading';
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project';
function App() {
  const [loading , setLoading]=useState(true);
  const [tours,setTours]=useState([])
  const fetchTours= async()=>{
    setLoading(true);
    try{
       const res=await fetch(url);
      const tours=await res.json();
      setTours(tours);
      setLoading(false)

    }catch(error){
      setLoading(false)
      console.log("failed to fetch " ,error)
    }
    
}
  useEffect(()=>{
    fetchTours();
  },[]);
  
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    );
    
  }
  return <main>
    <Tours tours={tours}/>
  </main>
}

export default App