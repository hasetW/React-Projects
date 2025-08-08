import React, { useEffect, useState } from 'react';
import people from './data';
import { MdNavigateNext } from "react-icons/md";


const Review = () => {
  const [currentItem,setcurrentItem]=useState(0);
  const [person,setperson]=useState({})
  const showperson = (index) =>{
      setperson(people[index]);
      return console.log(person)
  }
  useEffect(
  ()=> {showperson(currentItem);},[currentItem]);
  return <section className='review'>
    <img src={person.image} alt='name' className='person-img'/>
    <h3>{person.name}</h3>
    <p>{person.text}</p>

  </section>;
};

export default Review;