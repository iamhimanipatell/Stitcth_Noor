import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p> Subscribe To Our NewLetter And Stay Updated</p>
      <div>
        <input type="email" placeholder='Your Email Id'></input>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter;
