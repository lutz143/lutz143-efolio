import React from "react";
import ProfilePic from './images/Josh Lutz_DC.jpg'

function Header(props) {
  return (
    <header>
      <div className="left-section">
        <a href="/" id="user-title"><h1>Josh Lutz</h1></a>
      </div>
  
      <div className="middle-section">
        <nav>
          <a href="/">About Me</a>
          <a href="/projects">Work</a>
          <a href="/contact-me">Contact Me</a>      
          <a href="/resume">Resum&#233;</a>
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