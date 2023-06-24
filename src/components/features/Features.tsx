import Feature from './Feature';
import './features.css';
import { features } from '../../data/Data';
type features = {
  id: string;
  title: string;
  icon: string;
};


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
