import React, { useState } from 'react';
const Question = (question) => {
    const [seeMore,setseeMore]=useState(false)
    const toggleinfo=()=>{
        setseeMore((prev)=>!prev)
       
    }
    return <section className='question'>
        <article>
            <div className="inside">
                <h4>{question.title}</h4>
                <button className='btn' onClick={toggleinfo}>{seeMore?" + ":" - "}</button>
            </div>
            {seeMore && <p>{question.info}</p>}
        </article>
    </section>;
};

export default Question;
// this is the same way as the bottome one
// what we are saying is that if showinfo true render it
// {seeMore && <p>{question.info}</p>}
// {showInfo ? <p>{info}</p> : null}