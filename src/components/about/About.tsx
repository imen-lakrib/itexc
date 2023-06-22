import React from "react";
import "./about.css";
import Title from "../../theme/title/Title";
const About = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <Title title={"About"}/>
        <div className="about-description">
          <p>
            With 24/7 access to online doctors, psychiatrists, psychologists,
            therapists and other medical experts, care is always available,
            anytime and anywhere. Select and see your favorite providers again
            and again, right from your smartphone, tablet or computer.
          </p>
          <p>
            Better yet, Doctor On Demand is a covered benefit for over 98
            million Americans by their health plan or employer. It’s free to
            sign up and easy to check your coverage when you register.
          </p>
        </div>
      </div>
      <div className="about-img">
        <img src="/Image.png" alt="about" />
      </div>
      <img className="logo-White" src="/logoWhite.png" alt="logoWhite" />
    </div>
  );
};

export default About;
