import React, { useEffect, useState } from 'react';
import people from './data';
import { MdNavigateNext } from "react-icons/md";


const Review = () => {
  const [currentItem , setcurrentItem]=useState(0);
  const [person,setperson]=useState({})
  const showperson = (index) =>{
      setperson(people[index]);
      return console.log(person)
  }
  const increase=()=>{
    setcurrentItem((prev)=> prev< people.length-1?prev+1:0);
     
  }
 const decrease=()=>{
  setcurrentItem((prev)=>prev>0?prev-1:people.length-1)
 }

  useEffect(
  ()=> {showperson(currentItem);},[currentItem]);
  return <section className='review'>
    <img src={person.image} alt='name' className='person-img'/>
    <h3>{person.name}</h3>
    <p>{person.text}</p>
    <MdNavigateNext  onClick={()=>{increase()}}/>

  </section>;
};

export default Review;