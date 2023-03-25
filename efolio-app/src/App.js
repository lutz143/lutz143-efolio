import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ProfileContainer from './components/ProfileContainer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className='App'>
        <Header></Header>
        <Banner></Banner>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;