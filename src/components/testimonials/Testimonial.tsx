import React from "react";
import StarIcon from "@mui/icons-material/Star";

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  img: string;
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
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  sx={{ color: "#ffc107" }}
                  key={i}
                  className={`star-icon ${i < activeIndex ? "filled" : ""}`}
                />
              ))}
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
