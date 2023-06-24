
type FeatureProps = {
  feature: {
    id: string;
    title: string;
    icon: string;
  };
};

const Feature = ({ feature }: FeatureProps) => {
  return (
    <div className='feature-item'>
      <img src={feature.icon} alt={feature.title} />
      <p>{feature.title}</p>
    </div>
  );
};

export default Feature;
