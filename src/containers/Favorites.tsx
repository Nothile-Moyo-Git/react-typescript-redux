import FavoriteItem from '../components/Favorites/FavoriteItem';
import { ProductsContext } from '../context/products-context';
import React from "react";
import './Products.scss';

// Product interface to make our objects more explicit
interface Product {
  id : string,
  title : string,
  description : string,
  isFavorite : boolean
}

const Favorites = () => {

  // Products context
  const productsContext = React.useContext(ProductsContext);

  // Filter out our favorite product
  const favoriteProducts = productsContext?.products.filter((product : Product) => (product.isFavorite));

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
