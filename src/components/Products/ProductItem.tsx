import './ProductItem.scss';
import Card from '../UI/Card';
import React from "react";
import { ProductsContext } from '../../context/products-context';

const ProductItem = (props : any) => {

  const toggleFavorite = React.useContext(ProductsContext)?.toggleFavorite;

  return (

    <Card style={{ marginBottom: '1.5rem', animationDelay: `${props.index / 2}s` }} className={props.isFav && "card--pink-shadow"}>

      <div className="product-item">

        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>

        <p>{props.description}</p>

        <button
          className={ !props.isFav ? 'button-outline' : '' }
          onClick={() => { toggleFavorite(props.id) }}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}          
        </button>

      </div>

    </Card>

  );
};

export default ProductItem;
