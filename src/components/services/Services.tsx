import React, { useEffect } from "react";
import "./services.css";
import Service from "./Service";
import { Grid } from "@mui/material";

const servicesItems = [
  {
    id: "01",
    title: "Cold & flu",
    list: [
      { id: "01", item: "Cough" },
      { id: "01", item: "Headaches" },
      { id: "01", item: "Nausea & vomiting" },
      { id: "01", item: "Fever" },
    ],
  },
  {
    id: "02",
    title: "Mental health",
    list: [
      { id: "01", item: "Cough" },
      { id: "01", item: "Headaches" },
      { id: "01", item: "Nausea & vomiting" },
      { id: "01", item: "Fever" },
    ],
  },
  {
    id: "03",
    title: "Mental health",
    list: [
      { id: "01", item: "Cough" },
      { id: "01", item: "Headaches" },
      { id: "01", item: "Nausea & vomiting" },
      { id: "01", item: "Fever" },
    ],
  },
  {
    id: "04",
    title: "Headaches",
    list: [
      { id: "01", item: "Cough" },
      { id: "01", item: "Headaches" },
      { id: "01", item: "Nausea & vomiting" },
      { id: "01", item: "Fever" },
    ],
  },
  {
    id: "05",
    title: "Everyday care",
    list: [
      { id: "01", item: "Cough" },
      { id: "01", item: "Headaches" },
      { id: "01", item: "Nausea & vomiting" },
      { id: "01", item: "Fever" },
    ],
  },
  {
    id: "06",
    title: "Allergies",
    list: [
      { id: "01", item: "Cough" },
      { id: "01", item: "Headaches" },
      { id: "01", item: "Nausea & vomiting" },
      { id: "01", item: "Fever" },
    ],
  },
];
const Services = () => {
    
  return (
    <div className="services-section">
      <h2>We're here for you</h2>
      <p>
        Visits start at $79 for a 15 min consultation, or could be free
        depending on your insurance. See costs for more information.
      </p>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {servicesItems.map((service) => (
            <Grid item xs={12} sm={4} md={4} key={service.id}>
              <Service key={service.id} service={service} />
            </Grid>
          ))}
        </Grid>
      </div>
  );
};

export default Services;
