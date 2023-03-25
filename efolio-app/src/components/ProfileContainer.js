import React from 'react';
import Header from './Header';
import Banner from './Banner';
import MainContainer from './Main';
import Footer2 from './Footer2';
// import { useState, useEffect } from 'react';

const ProfileContainer = () => {
  // const [result, setResult] = useState({});
  // const [search, setSearch] = useState('');

  return (
    <main className='main-page'>
      <Header></Header>
      <Banner></Banner>
      <MainContainer></MainContainer>
      <Footer2></Footer2>
    </main>
  );
};

export default ProfileContainer;