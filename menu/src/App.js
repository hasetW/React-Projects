import React, { useState } from 'react';
import Menu from './menu';
import Categories from './categories';
import items from './data';

function App() {
  const [menuItems,setmenuItem]=useState(items);
  const [categories,setCatagories]=useState([]);

  const filtermenu=(category)=>{
    const newmenu= items.filter((items)=>items.category ===category)
    setmenuItem(newmenu);
  }
  return(
  <main>
    <section className='menu section'>
      <div className='title'>
        <h2>our menu</h2>
      </div>
      <div className='underline'></div>
      <Categories/>
      <Menu items={menuItems}/>
    
    </section>

  </main>
  )
  
}
export default App;