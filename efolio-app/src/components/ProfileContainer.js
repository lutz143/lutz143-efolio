import React from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './AboutMe';
// import { useState, useEffect } from 'react';

const ProfileContainer = () => {
  // const [result, setResult] = useState({});
  // const [search, setSearch] = useState('');

  return (
    <div><Header></Header><Banner></Banner><About></About></div>
  );
};

export default ProfileContainer;