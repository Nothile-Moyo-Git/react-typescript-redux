import './ProductItem.scss';
import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import { toggleFav } from '../../store/actions/products';

const ProductItem = (props : any) => {

  const dispatch = useDispatch();

  const toggleFavHandler = () => {
    dispatch(toggleFav(props.id));
  };

  return (

    <Card style={{ marginBottom: '1.5rem' }}>

      <div className="product-item">

        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>

        <p className={props.isFav ? 'is-fav' : ''}>{props.description}</p>

        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
          
        </button>
      </div>

    </Card>

  );
};

export default ProductItem;
