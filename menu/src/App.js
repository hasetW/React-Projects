import React, { useState } from 'react';
import Menu from './menu';
import Categories from './categories';
import items from './data';

function App() {
  return <section className='menu'>
    {items.map((item)=>{
      return <Menu key={item.id} {...item}/>

    })} 
  </section>
  
}
export default App;