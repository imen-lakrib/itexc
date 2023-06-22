import React, { useState } from 'react';
import './accordion.css';

type AccordionProps = {
  title: string;
  content: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button className={`accordion__header ${isOpen ? 'active' : ''}`} onClick={handleToggle}>
        {title}
      </button>
      {isOpen && <div className="accordion__content">{content}</div>}
    </div>
  );
};

export default Accordion;
