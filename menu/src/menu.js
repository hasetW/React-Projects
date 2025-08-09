import React from 'react';

const Menu = (item) => {
  return <section>
    <h2>menu component</h2>;
    <h3>{item.title}</h3>
    <img src={item.img} alt='name'/>
  </section>
   
};

export default Menu;