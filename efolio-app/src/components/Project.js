import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Virtuoso from './images/Virtuoso-Main-Page.png'
import iDAD from './images/iDAD_Homepage.PNG'
import YouTubeStyle from './images/youtube-logo-byjosh.jpg'
import TechBlog from './images/tech-blog.png'



function About(props) {
  return (


    <section className="main-section" id="work">
      <h2>Work</h2>
      
      <div className="flex-container">
        
        <a href="https://team-6-virtuoso.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="flex-item SPPECTR" style={{ backgroundImage: `url(${Virtuoso})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div>
            <h3>Virtuoso</h3>          
            <span>A RESTful API to Connect Musical Talent</span>
          </div>
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
        </a>

        <a href="https://tech-blog-site-143.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="flex-item techBlog" style={{ backgroundImage: `url(${TechBlog})` }}>
          <div>            
            <h3>Tech BLog</h3>
            <span>Full Stack MVC App</span>
          </div>
        </a>

      </div>
    </section>

  )
}

export default About;