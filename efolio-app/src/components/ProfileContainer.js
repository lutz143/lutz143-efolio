import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
import Banner from './Banner';
import About from './AboutMe';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Banner />
      {/* We are passing the currentPage from state and the function to update it */}      
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
