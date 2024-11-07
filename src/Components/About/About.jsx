import React from 'react'
import './About.css'
import About_img from '../../assets/About.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={About_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm Prithak Acharya, a recent arrival to the tech industry. 'm 16 years old. My country's name is Nepal.</p>
            <p> I am employed as a graphic designer and web developer. My interests also include visual effects, video editing, and filmmaking.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML, CSS</p><hr style={{width:"80%"}}></hr></div>
            <div className="about-skill"><p>React Js</p><hr style={{width:"40%"}}></hr></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}></hr></div>
            <div className="about-skill"><p>Graphics</p><hr style={{width:"30%"}}></hr></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0.5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>0</h1>
          <p>CLIENTS YET :(</p>
        </div>
      </div>
    </div>
  )
}

export default About