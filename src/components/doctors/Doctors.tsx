import "./doxtors.css";
import Button from "../../theme/button/Button";
const Doctors = () => {
  return (
    <div className="docotor-section">
      <div className="text">
        <h1>Find The Best doctor you need</h1>
        <p>
          From rashes to colds, stress management to diabetes management,
          individual treatment plans are created around you. Our medical and
          mental health providers work together, keeping your personal journey
          protected and connected.
        </p>
        <Button link="/" text="Get Started"></Button>
      </div>
      <img src="/doctors.png" alt="doctors"/>
    </div>
  );
};

export default Doctors;
