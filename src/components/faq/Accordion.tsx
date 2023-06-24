import React, { useState } from 'react';
import './accordion.css';

type AccordionProps = {
  question: {
    id: string;
    title: string;
    description: string;
  };
};

const Accordion: React.FC<AccordionProps> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button className={`accordion__header ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
         <span style={{color:"#F27219", fontWeight:"bolder", fontSize:"15px"}}>{question.id}:</span>{question.title}
      </button>
      {isOpen && <div className="accordion__content">{question.description}</div>}
    </div>
  );
};

export default Accordion;
