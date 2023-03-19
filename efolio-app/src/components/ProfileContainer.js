import React from 'react';
import Header from './Header';
import Banner from './Banner';
import MainContainer from './Main';
import Footer from './Footer';
// import { useState, useEffect } from 'react';

const ProfileContainer = () => {
  // const [result, setResult] = useState({});
  // const [search, setSearch] = useState('');

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <MainContainer></MainContainer>
      <Footer></Footer>
    </div>
  );
};

export default ProfileContainer;