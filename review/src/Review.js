import React, { useEffect, useState } from 'react';
import people from './data';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Review = () => {
  const [currentItem , setcurrentItem]=useState(0);
  const [person,setperson]=useState({})
  const showperson = (index) =>{
      setperson(people[index]);
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
    <div className='img-container'>
      <img src={person.image} alt='name' className='person-img '/>

    </div>
    <h3 className='author'>{person.name}</h3>
    <h4 className='job'>{person.job}</h4>
    <p className='info'>{person.text}</p>
    <div>
      <GrPrevious className='prev-btn' onClick={()=>{decrease()}} />
      <GrNext className='next-btn' onClick={()=>{increase()}}/>
    </div>

  </section>;
};

export default Review;