import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Virtuoso from './images/Virtuoso-Main-Page.png'
import iDAD from './images/iDAD_Homepage.PNG'
import YouTubeStyle from './images/youtube-logo-byjosh.jpg'
import TechBlog from './images/tech-blog.png'
import NoteTaker from './images/NoteTaker.png'
import PWA from './images/PWA.PNG'
import GitHub from './images/GitHub.png'



function About(props) {
  return (


    <section className="main-section" id="work">
      <h2>Work</h2>
      
      <div className="flex-container">
        
        <a href="https://virtuoso-lutz143.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="flex-item Virtuoso" style={{ backgroundImage: `url(${Virtuoso})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div>
            <h3>Virtuoso</h3>          
            <span>A RESTful API to Connect Musical Talent</span>
          </div>
          <a href="https://github.com/lutz143/virtuoso" target="_blank" rel="noopener noreferrer">
            <img className="flex-item-img" src={GitHub} style={{ 'width':'10%', '--hover-opacity':1.0 }}/>
          </a>
        </a>

        
        <a href="javascript:iDAD_alert();" className="flex-item iDAD" style={{ backgroundImage: `url(${iDAD})` }}>
          <div>
            <h3>iDAD</h3>
            <span>Access-SQL Analytics Tool</span>
          </div>
        </a>

        
        <a href="https://lutz143.github.io/youtube-clone/" target="_blank" rel="noopener noreferrer" className="flex-item youtubeClone" style={{ backgroundImage: `url(${YouTubeStyle})` }}>
          <div>            
            <span>Flexbox and Styling Practice</span>
          </div>
          <a href="https://github.com/lutz143/youtube-clone" target="_blank" rel="noopener noreferrer">
            <img className="flex-item-img" src={GitHub} style={{ 'width':'10%', '--hover-opacity':1.0 }}/>
          </a>
        </a>

        <a href="https://tech-blog-site-143.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="flex-item techBlog" style={{ backgroundImage: `url(${TechBlog})` }}>
          <div>            
            <h3>Tech BLog</h3>
            <span>Full Stack MVC App</span>
          </div>
        </a>

        <a href="https://note-taker-app-143.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="flex-item noteTaker" style={{ backgroundImage: `url(${NoteTaker})` }}>
          <div>            
            <h3>Note Taker App</h3>
            <span>Express.js to handle API routing</span>
          </div>
        </a>

        <a href="https://text-editor-lutz143.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="flex-item PWA" style={{ backgroundImage: `url(${PWA})` }}>
          <div>            
            <h3>Text Editor</h3>
            <span>PWA & Caching</span>
          </div>
        </a>

      </div>
    </section>

  )
}

export default About;