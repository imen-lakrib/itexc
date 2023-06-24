import DoneIcon from '@mui/icons-material/Done';

type CharacteristicsItem = {
  id: string;
  title: string;
};

const Characteristic = ({ CharacteristicsItem }: { CharacteristicsItem: CharacteristicsItem }) => {
  return (
    <div className='single-caractere'>
      <DoneIcon sx={{color:"#F27219"}} />
      <p>{CharacteristicsItem.title}</p>
    </div>
  );
};

export default Characteristic;
