import React from "react";
import "./title.css";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <img src="/logo.png" alt="logo" />
    </div>
  );
};

export default Title;
