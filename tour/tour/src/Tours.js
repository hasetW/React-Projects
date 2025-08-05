import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
  return <section>
    <div className='title'>
      <h2>our tours</h2>
      <div className='underline'></div>
    </div>
    <div>
      {tours.map((tour)=>{
        return (
        <Tour key={tour.id} {...tour}></Tour>
      );
      })};
      </div>
    </section>
  
};

export default Tours;
/* 
  If you want to pass the mapped item (tour) to the next 
  component (Tour.js), you can use the spread operator {...tour}.
  It is the same as writing:
  <Tour id={tour.id} name={tour.name} price={tour.price} />
  This keeps the code shorter and cleaner when passing many props.
*/
