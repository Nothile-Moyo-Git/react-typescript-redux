import ProductItem from '../components/Products/ProductItem';
import { ProductsContext } from '../context/products-context';
import './Products.scss';
import React from 'react';

// Product interface to make our objects more explicit
interface Product {
  id : string,
  title : string,
  description : string,
  isFavorite : boolean
}

const Products = () => {

  const productList = React.useContext(ProductsContext)?.products;

  return (

    <ul className="products-list">

      { productList &&
      productList.map((product : Product, index : number) => (
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
