import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We are committed to providing improved education that empowers individuals globally.</h1>
            <p>Education is the key to unlocking the full potential of individuals, empowering them to contribute positively to society and thrive in an ever-evolving world</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
