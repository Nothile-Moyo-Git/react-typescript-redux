import { useSelector } from 'react-redux';
import ProductItem from '../components/Products/ProductItem';
import './Products.scss';

// Product interface to make our objects more explicit
interface Product {
  id : string,
  title : string,
  description : string,
  isFavorite : boolean
}

const Products = () => {

  const productList = useSelector((state : any) => state.shop.products);

  return (

    <ul className="products-list">

      {productList.map((product : Product, index : number) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          isFav={product.isFavorite}
          index={index}
        />
      ))}
      
    </ul>

  );
};

export default Products;