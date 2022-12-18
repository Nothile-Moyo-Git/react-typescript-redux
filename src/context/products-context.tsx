/**
 * Products context, used for demo purposes for upgrading from redux to context.
 */

import React from "react";
import { useState } from "react";

interface ProductContextInterface {
  products : any[],
  setProducts : any
}

export const ProductsContext = React.createContext<ProductContextInterface | null>(null);


export const Props = (props : any) => {

    const [productsList, setProductsList] = useState<any>([
        {
          id: 'p1',
          title: ' Red Scarf',
          description: `A beautiful, elegant, classy red scard`,
          isFavorite: false
        },
        {
          id: 'p2',
          title: 'Blue T-Shirt',
          description: `A bold blue shirt!`,
          isFavorite: false
        },
        {
          id: 'p3',
          title: 'Green Trousers',
          description: `Green trousers, also comes with a cameo look for a more soldier-esque feel`,
          isFavorite: false
        },
        {
          id: 'p4',
          title: 'Orange Hat',
          description: `A comfortable and soft orange fishermans hat`,
          isFavorite: false
        }
    ]);

    const toggleFavorite = (productId : string) => {

      setProductsList((previousState : any) => {

      });

    }

    return (
        <ProductsContext.Provider value={{products: productsList, setProducts : setProductsList}}>
          {props.children}
        </ProductsContext.Provider>
    );
};