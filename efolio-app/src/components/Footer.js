import React from "react";
import LinkedInLogo from './images/LinkedIn.png'
import GitHubLogo from './images/GitHub.png'
import GmailLogo from './images/Gmail.png'

function Footer(props) {
  return (
    <footer>
      <div>
      </div>
      <div className="footer-icon" >
        <a href="" className="">
          <img id="linkedin-icon" src={LinkedInLogo} alt="LinkedIn Icon"/>
        </a>
        <a href="" className="">
          <img id="github-icon" src={GitHubLogo} alt="GitHub Icon"/>
        </a>
        <a href="" className="">
          <img id="gmail-icon" src={GmailLogo} alt="Email Icon"/>
        </a>
      </div>
      <div>
      </div>
    </footer>
  );
}

export default Footer;