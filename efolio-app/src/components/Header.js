import React from "react";
import ProfilePic from './images/Josh Lutz_DC.jpg'

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="left-section">
        <a href="https://lutz143.github.io/lutz143-efolio/" id="user-title">
          <h1>
            Josh Lutz</h1>
        </a>
      </div>
  
      <div className="middle-section">
        <nav>
          <a href="#aboutme"
            onClick={() => handlePageChange('About')}>
            About Me</a>
          <a href="#project"
            onClick={() => handlePageChange('Project')}>
            Work</a>
          <a href="#contact"
            onClick={() => handlePageChange('Contact')}>
            Contact Me</a>      
          <a href="#resume"
            onClick={() => handlePageChange('Resume')}>
            Resum&#233;</a>
        </nav>
      </div>
  
      <div className="right-section">
        <a href="https://www.linkedin.com/in/joshlutz/" target="_blank" rel="noopener noreferrer">
          <img className="current-user" src={ProfilePic} alt="User of the Portfolio"/>
        </a>      
      </div>
    </header>
  );
}

export default Header;