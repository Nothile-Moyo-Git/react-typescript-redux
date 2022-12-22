import './ProductItem.scss';
import Card from '../UI/Card';
import useStore from '../../hooks-store/store';
import React from 'react';

const ProductItem = React.memo((props : any) => {

  // Grab dispatch function
  const dispatch = useStore(false)[1];

  const toggleFavorite = () => {

    dispatch('TOGGLE_FAV', props.id);
    
  }

  console.log("Rendering");

  return (

    <Card style={{ marginBottom: '1.5rem', animationDelay: `${props.index / 2}s` }} className={props.isFav && "card--pink-shadow"}>

      <div className="product-item">

        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>

        <p>{props.description}</p>

        <button
          className={ !props.isFav ? 'button-outline' : '' }
          onClick={() => { return toggleFavorite(); }}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}          
        </button>

      </div>

    </Card>

  );

});

export default ProductItem;
