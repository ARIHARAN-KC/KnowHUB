import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
      if(tx > -50){
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Chennai,INDIA</span>
                </div>
              </div>
              <p>Enrolling in the online degree program has been life-changing. The flexible schedule allowed me to balance my career and studies effortlessly. The interactive platform and expert faculty made learning engaging and effective.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Smith</h3>
                  <span>Brisbane,AUSTRALIA</span>
                </div>
              </div>
              <p>The program exceeded my expectations with its comprehensive curriculum and excellent support from mentors. Highly recommended for those seeking quality education.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Ellise Perry</h3>
                  <span>Perth,AUSTRALIA</span>
                </div>
              </div>
              <p>The course structure was well-organized, and the online resources were incredibly helpful. I was able to gain practical knowledge that I could immediately apply to my job.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Temba Bavuma</h3>
                  <span>Cape Town,South Africa</span>
                </div>
              </div>
              <p>Learning through this program has been an empowering journey. The instructors were knowledgeable, and the interactive sessions made the experience even better.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
