import React from "react";
import "./hero.css";
import Button from "../../theme/button/Button";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-titles">
        <h1>
          Feel Better about Finding <span className="color-test">Healthcare</span>{" "}
        </h1>
        <p>
          Healththy 24 Online ranks highest in telehealth satisfaction among
          direct-to-consumer brands.
        </p>
        <Button link='/' text='Get Started'></Button>
      </div>
      {/* <div></div> */}
      <img src="/Rectangle.png" alt="hero" />
    </div>
  );
};

export default Hero;