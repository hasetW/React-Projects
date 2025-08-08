import React, { useState } from 'react';
import Question from './question';
import questions from './data';
function App() {
  return <section className='container'>
    <h3>accordion project setup</h3>
    { questions.map((question)=>{
      return <Question key={question.id} {...question}/>
      
    })}
   

  </section>
  
}

export default App;
