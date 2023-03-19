import React from "react";
import BannerLogo from './images/banner.jpg';

const steelersYellow = "#ffda71";

function Banner(props) {
  return (
    <div className="top-banner" style={{background: `linear-gradient(200deg, ${steelersYellow} 0%, ${steelersYellow} 100%), url(${BannerLogo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "soft-light"}} alt="Banner Image">
      <h2>Welcome!</h2>
    </div>
  );
};

export default Banner;