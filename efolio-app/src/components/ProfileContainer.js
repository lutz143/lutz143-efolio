import React from 'react';
import Header from './Header';
import Banner from './Banner';
import MainContainer from './Main';
// import { useState, useEffect } from 'react';

const ProfileContainer = () => {
  // const [result, setResult] = useState({});
  // const [search, setSearch] = useState('');

  return (
    <div><Header></Header><Banner></Banner><MainContainer></MainContainer></div>
  );
};

export default ProfileContainer;