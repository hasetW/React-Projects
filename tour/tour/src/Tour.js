import React from 'react';

const Tour = (tour) => {
  return (
    <article className='single-tour'>
      <img src={tour.image} alt={tour.name}/>
      <footer>
        <div>
          
        </div>
      </footer>

  </article>
  );
  
};

export default Tour;