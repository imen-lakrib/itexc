import React from "react";
import StarRating from "../../theme/rating/StarRating";

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  img: string;
  stars: number;
}

interface TestimonialProps {
  testimonials: Testimonial[];
  activeIndex: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  testimonials,
  activeIndex,
}) => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-item ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div className="star-icons">
            <StarRating rating={testimonial.stars} />

            </div>
            <p className="testimonial-comment">{testimonial.comment}</p>
            <img
              className="testimonial-comment"
              src={testimonial.img}
              alt={testimonial.name}
            />
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
