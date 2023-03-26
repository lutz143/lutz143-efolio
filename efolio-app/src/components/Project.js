import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Virtuoso from './images/Virtuoso-Main-Page.png'
import WeatherApp from './images/WeatherApp.png'
import YouTubeStyle from './images/youtube-logo-byjosh.jpg'
import TechBlog from './images/tech-blog.png'
import NoteTaker from './images/NoteTaker.png'
import PWA from './images/PWA.PNG'
import GitHub from './images/GitHub.png'
import GitHubWhite from './images/GitHubWhite.png'



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
            <img className="flex-item-img" src={GitHub} style={{ 'width':'12%', '--hover-opacity':1.0 }} alt="GitHub Logo"/>
          </a>
        </a>

        <a href="https://lutz143.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" className="flex-item weatherApp" style={{ backgroundImage: `url(${WeatherApp})` }}>
          <div>
          <h3>Weather App</h3>          
            <span>Third Party API</span>
          </div>
          <a href="https://github.com/lutz143/weather-dashboard" target="_blank" rel="noopener noreferrer">
            <img className="flex-item-img" src={GitHub} style={{ 'width':'12%', '--hover-opacity':1.0 }} alt="GitHub Logo"/>
          </a>
        </a>
        
        <a href="https://lutz143.github.io/youtube-clone/" target="_blank" rel="noopener noreferrer" className="flex-item youtubeClone" style={{ backgroundImage: `url(${YouTubeStyle})` }}>
          <div>
          <h3>CSS</h3>          
            <span>Flexbox and Styling Practice</span>
          </div>
          <a href="https://github.com/lutz143/youtube-clone" target="_blank" rel="noopener noreferrer">
            <img className="flex-item-img" src={GitHub} style={{ 'width':'12%', '--hover-opacity':1.0 }} alt="GitHub Logo"/>
          </a>
        </a>

        <a href="https://tech-blog-site-143.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="flex-item techBlog" style={{ backgroundImage: `url(${TechBlog})` }}>
          <div>            
            <h3>Tech BLog</h3>
            <span>Full Stack MVC App</span>
          </div>
          <a href="https://github.com/lutz143/tech-blog-website" target="_blank" rel="noopener noreferrer">
            <img className="flex-item-img" src={GitHub} style={{ 'width':'12%', '--hover-opacity':1.0 }} alt="GitHub Logo"/>
          </a>
        </a>

        <a href="https://note-taker-app-143.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="flex-item noteTaker" style={{ backgroundImage: `url(${NoteTaker})` }}>
          <div>            
            <h3>Note Taker App</h3>
            <span>Express.js to handle API routing</span>
          </div>
          <a href="https://github.com/lutz143/note-taker-app" target="_blank" rel="noopener noreferrer">
            <img className="flex-item-img" src={GitHub} style={{ 'width':'12%', '--hover-opacity':1.0 }} alt="GitHub Logo"/>
          </a>
        </a>

        <a href="https://text-editor-lutz143.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="flex-item PWA" style={{ backgroundImage: `url(${PWA})` }}>
          <div>            
            <h3>Text Editor</h3>
            <span>PWA & Caching</span>
          </div>
          <a href="https://github.com/lutz143/progressive-test-editor" target="_blank" rel="noopener noreferrer">
            <img className="flex-item-img" src={GitHubWhite} style={{ 'width':'12%', '--hover-opacity':1.0 }} alt="GitHub Logo"/>
          </a>
        </a>

      </div>
    </section>

  )
}

export default About;