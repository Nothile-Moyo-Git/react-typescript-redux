import FavoriteItem from '../components/Favorites/FavoriteItem';
import useStore from '../hooks-store/store';
import './Products.scss';

// Product interface to make our objects more explicit
interface Product {
  id : string,
  title : string,
  description : string,
  isFavorite : boolean
}

const Favorites = () => {

  // Filter out our favorite product
  const state = useStore()[0];

  const favoriteProducts = state.products.filter((product : any) => {
    return product.isFavorite === true;
  });

  let content = <p className="placeholder">Got no favorites yet!</p>;

  if (favoriteProducts && favoriteProducts.length > 0) {
    
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
