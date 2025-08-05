import React, { useState } from 'react';

const Tour = ( tour, removeTour) => {
  const [readmore,setreadmore]=useState(false)
  return (
    <article className='single-tour'>
      <img src={tour.image} alt={tour.name}/>
      <footer>
        <div>
          <h4>{tour.name}</h4>
          <h4 className='tour-price'>${tour.price}</h4>
        </div>
        <p className='tour-info'>
          {readmore ? tour.info :`${(tour.info).substring(0,200) } . . .` }
          <button onClick={()=>{
            setreadmore(!readmore);
            // this is alternative for this 
            // if(readmore==false){
            //   setreadmore(true)
            // }else{
            //   setreadmore(false)
            // }
          }}> {readmore ? 'show less' : 'show more'}</button>
         
        </p>
        <button className='delete-btn' onClick={()=>removeTour(tour.id)}
          >not intersted
        </button>
      </footer>

  </article>
  );
  
};

export default Tour;