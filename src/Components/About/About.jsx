import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Empowering the Leaders of Tomorrow</h2>
        <p> Our university is a beacon of knowledge and innovation, dedicated to shaping the leaders of tomorrow. With a rich history of academic excellence, we provide students with the tools they need to excel in a rapidly changing world.</p>
        <p> We offer a wide range of programs and disciplines, supported by state-of-the-art facilities and a vibrant campus life. From groundbreaking research opportunities to collaborative projects, our students are at the forefront of creating solutions for global challenges.</p>
        <p> Join us in our mission to inspire, empower, and transform. At our university, every student has the chance to unlock their full potential and contribute to a brighter future for society.</p>
      </div>
    </div>
  )
}
import './About.css'

export default About
