import { useSelector } from 'react-redux';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

// Product interface to make our objects more explicit
interface Product {
  id : string,
  title : string,
  description : string,
  isFavorite : boolean
}

const Favorites = () => {

  const favoriteProducts = useSelector((state : any) =>
    state.shop.products.filter((product : Product) => (product.isFavorite))
  );

  let content = <p className="placeholder">Got no favorites yet!</p>;

  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">

        {favoriteProducts.map((product : Product) => (
          <FavoriteItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
          />
        ))}
        
      </ul>
    );
  }

  return content;

};

export default Favorites;
