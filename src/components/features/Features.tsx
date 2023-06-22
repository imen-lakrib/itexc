import React from 'react';
import Feature from './Feature';
import './features.css';

type FeatureItem = {
  id: string;
  title: string;
  icon: string;
};

const features: FeatureItem[] = [
  { id: '01', icon: '/hand.png', title: 'Online consultations' },
  { id: '02', icon: '/Group.png', title: 'Medical advice and second opinions' },
  { id: '03', icon: '/24h.png', title: 'availability 24/7' },
  { id: '04', icon: '/call.png', title: 'Health education and resources' },
];

const Features = () => {
  return (
    <div className='features-container'>
      {features.map((feature) => {
        return <Feature key={feature.id} feature={feature} />;
      })}
    </div>
  );
};

export default Features;
