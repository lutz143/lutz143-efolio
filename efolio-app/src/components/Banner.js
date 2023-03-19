import React from "react";
import BannerLogo from './images/banner.jpg';

function Banner(props) {
  return (
    <div className="top-banner">      
      <img src={BannerLogo} className="top-banner" alt="Banner Image"/>      
    </div>
  );
};

export default Banner;