import React from "react";
import "./characteristics.css";
import Characteristic from "./Characteristic";
import Title from "../../theme/title/Title";
import { characteristicsItems } from "../../data/Data";


const Characteristics = () => {
  return (
    <div className="caracteristic-section">
      <div className="caracteristic-img">
        
      </div>
      <div className="caracteristic-text">
        <Title title={"Why choosing"} />
        <div className="caracteristic-description">
          <p>
            Meet with an urgent care doctor in minutes, 24/7.Schedule a session
            with a therapist or psychiatrist this week.
          </p>
          <ul className="caracteristics-items">
            {characteristicsItems.map((CharacteristicsItem) => {
              return (
                <li key={CharacteristicsItem.id}>
                  <Characteristic CharacteristicsItem={CharacteristicsItem} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
