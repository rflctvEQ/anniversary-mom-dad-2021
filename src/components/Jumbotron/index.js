import React from 'react';
import './style.css';

function Jumbotron() {
    return(
        <div className='jumbotron custom-jumbo'>
            <h1>Happy Anniversary, Mom and Dad!</h1>
            <p className='line-1'>I've missed you guys so much these past few months. I really look forward to seeing you soon.</p>
            <p className='line-2'>Your relationship really has served as an example to me in my relationship with Lulu. The good <em>and</em> the not so good, the highs and the lows, but most importantly the <strong>unending</strong> love you share informs me everyday in my relationship with Lulu.</p>
            <p className='line-3'>Thanks for being such a great example.</p>
            <p className='line-4'>With Immense Love and Gratitude,</p>
            <p className='line-5'>Ian</p>
            <p className='line-6'>P.S. Check out some of the pictures I found of you guys in my phone!</p>
        </div>
    )
}

export default Jumbotron;