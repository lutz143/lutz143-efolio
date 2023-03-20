import React from "react";
import ProfilePic from './images/Josh Lutz_DC.jpg'

const p1 = `As a current Lockheed Martin manager, I value experiences that provide a source of challenging and meaningful work with a focus on 
building a growth mindset.  During my versatile tenure at Lockheed Martin, I have had the opportunity to work in several unique positions 
at multiple locations.  Consequently, this has developed my understanding of our business and my ability to build effective relationships 
while delivering results.  As a graduate of Lockheed Martin’s Finance Leadership Development Program, I’ve been awarded a path to 
experience multiple job functions and to engrain the tenants of Full-Spectrum Leadership (FSL).`

const p2 = `Evolving along this journey, I have instilled a passion for the role web development, data analytics, and data management has on 
accomplishing the mission.  It is with this passion that I focused my studies in my pursuit of web development through Ohio State’s 
Coding Bootcamp as well as receiving my MBA with a concentration in Business Analytics.  These skills in web development and data 
analytics provide a framework to gather data, identify pertinent information, and develop a full stack user experience.`

const p3 = `I look forward to engaging with you to see how my knowledge and experience can meet your customers’ needs!`

function About(props) {
  return (
    <div className="main-section" id="about-me">
      <h2>About Me<br></br>
        <img className="about-me-img" src={ProfilePic} alt="User Image of the Portfolio"/>
      </h2>
      <div>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
    </div>
  )
}

export default About;