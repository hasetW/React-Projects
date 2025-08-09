import React from 'react';

const Menu = (item) => {
  return <section className='menu-item'>
    <img className='photo' src={item.img} alt='name'/>
    <div className='item-info'>
         <header>
            <h4>{item.title}</h4>
            <p className='item-text'>{item.desc}</p>
         </header>
         
    </div>
   
    
  </section>
   
};

export default Menu;