import React, { useState } from "react";
import Testimonial from "./Testimonial";
import backgroundImage from "/testimonials.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./testimonials.css";

interface TestimonialData {
  id: number;
  img: string;
  name: string;
  comment: string;
}

interface TestimonialsProps {
  testimonials: TestimonialData[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="testimonials-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="testimonials-box">
        <h2>Testimonials</h2>
        <h1>You're in safe hands</h1>

        <div className="single-testimonial">
          <ArrowBackIosIcon className="arrow" onClick={handlePrevious} />
          <Testimonial
            testimonials={[testimonials[activeIndex]]}
            activeIndex={activeIndex}
          />
          <ArrowForwardIosIcon className="arrow" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
