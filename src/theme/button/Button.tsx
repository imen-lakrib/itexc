import React from 'react';
import './button.css'
type ButtonProps = {
  text: string;
  link?: string;
  type? :"submit";
};

const Button: React.FC<ButtonProps> = ({ text, link, type }) => {
  const handleClick = () => {
    // Handle button click here
  };

  return (
    <button type={type} className='button' onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;