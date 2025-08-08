import React, { useState } from 'react';
const question = (question) => {
    return <section className='question'>
        <article>
            <div>
                <h4>{question.title}</h4>
                <button className='btn'>+</button>
            </div>
            
            
            <p>{question.info}</p>
        </article>
    </section>;
};

export default question;