import Card from '../UI/Card';
import './FavoriteItem.scss';

const FavoriteItem = (props : any) => {

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
  
};

export default FavoriteItem;

