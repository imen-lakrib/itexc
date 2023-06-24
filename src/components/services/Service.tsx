import React from 'react';

type ServiceItem = {
  id: string;
  item: string;
};

type ServiceProps = {
  service: {
    id: string;
    title: string;
    list: ServiceItem[];
  };
};

const Service: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="service-container">
      <div className="service-title">
        <h4>{service.title}</h4>
        <img src="/Frame.png" alt="service-icon" />
      </div>
      <ul>
        {service.list.map((serviceItem) => {
          return <li key={serviceItem.id}>{serviceItem.item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Service;
