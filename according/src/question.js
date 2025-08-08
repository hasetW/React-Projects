import React, { useState } from 'react';
const question = (question) => {
    return <section className='question'>
        <article>
            <h4>{question.title}</h4>
            <p>{question.info}</p>
        </article>
    </section>;
};

export default question;