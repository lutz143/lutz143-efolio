import React from "react";
import ProfilePic from './images/Josh Lutz_DC.jpg'

function Header(props) {
  return (
    <header>
      <div className="left-section">
        <h1>Josh Lutz</h1>
      </div>
  
      <div className="middle-section">
        <nav>
          <a href="#about-me">About Me</a>
          <a href="#work">Work</a>
          <a href="#contact-me">Contact Me</a>      
          <a href="./assets/docs/Josh Lutz 2023 Resume.pdf" download>Resume</a>
        </nav>        
      </div>
  
      <div className="right-section">
        <a href="https://www.linkedin.com/in/joshlutz/" target="_blank" rel="noopener noreferrer">
          <img className="current-user" src={ProfilePic} alt="User Image of the Portfolio"/>
        </a>      
      </div>
    </header>
  );
}

export default Header;