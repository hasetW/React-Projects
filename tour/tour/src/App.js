import React, { useEffect, useState } from 'react'
import Loading from './loading';
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project';
function App() {
  const [loading , setLoading]=useState(true);
  const [tours,setTours]=useState([])
// for not intersted button 
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

// fetching the data in async
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
  // calling fetch the data when the screen render 
  useEffect(()=>{
    fetchTours();
  },[]);
  // if it is loading show a loding componet
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    );
    
  }
  // else show the tour and passing the removetour(not intersted) to the child componet
  return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App