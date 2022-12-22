import './Products.scss';
import React from 'react';
import useStore from '../hooks-store/store';
const ProductItem = React.lazy(() => { return import('../components/Products/ProductItem'); });

// Product interface to make our objects more explicit
interface Product {
  id : string,
  title : string,
  description : string,
  isFavorite : boolean
}

const Products = () => {

  // Get the first value from the store which is the Products List
  const state = useStore()[0];

  return (

    <ul className="products-list">

      { state &&
      state.products.map((product : Product, index : number) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          isFav={product.isFavorite}
          index={index}
        />
      ))
      }
      
    </ul>

  );
};

export default Products;
