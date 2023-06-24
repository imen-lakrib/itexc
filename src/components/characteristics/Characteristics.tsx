import React from "react";
import "./characteristics.css";
import Characteristic from "./Characteristic";
import Title from "../../theme/title/Title";

const CharacteristicsItems = [
  { id: "01", title: "Experienced and Professional Team" },
  { id: "02", title: "Comprehensive Services" },
  { id: "03", title: "User-Friendly Interface" },
  { id: "04", title: "Safe and Secure Data Storage" },
  { id: "05", title: "Personalized Care" },
  { id: "06", title: "Positive Reputation" },
  { id: "07", title: "Convenient Access to Healthcare Services." },
];

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
            {CharacteristicsItems.map((CharacteristicsItem) => {
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
