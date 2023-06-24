import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <h1>Our secret to great virtual care is great doctors</h1>
      <p>Board-certified | Top 5% of medical specialists in the world | +90% satisfaction rating</p>
      <img src='/banner.png' alt="banner"/>
    </div>
  );
};

export default Banner;
