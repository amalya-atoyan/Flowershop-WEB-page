import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  const { src, price,title,id } = props;
  const navigate = useNavigate()

  return (
    <div className='card'>
      <img src={src} className='cardImage' alt='flower' />
      <h1>{title}</h1>
      <h3> Price -{price} AMD</h3>
      <button className='more' onClick={()=> navigate(id)}>More</button>
    </div>
  );
};

export default Card;