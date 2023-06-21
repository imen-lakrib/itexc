import React from 'react';
import './button.css'
type ButtonProps = {
  text: string;
  link?: string;
};

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  const handleClick = () => {
    // Handle button click here
  };

  return (
    <button className='button' onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;