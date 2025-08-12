import React, { useState } from 'react';
import Menu from './menu';
import Categories from './categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]); // fixed spelling

  const filterMenu = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newMenu = items.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterMenu={filterMenu} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
