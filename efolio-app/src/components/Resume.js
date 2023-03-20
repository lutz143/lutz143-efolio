import React from "react";
import ProfilePic from './images/Josh Lutz_DC.jpg'

const frontEnd = ['HTML', 'CSS', 'ETC.']
const backEnd = ['MySQL', 'SQL', 'NoSQL']


function About(props) {
  return (
    <div className="main-section" id="about-me">
      <h2>Resume<br></br>
        <img className="about-me-img" src={ProfilePic} alt="User Image of the Portfolio"/>
      </h2>
      <div>
        <ul>Front End Proficiencies
          <li>{frontEnd}</li>
        </ul>
      </div>
    </div>
  )
}

export default About;