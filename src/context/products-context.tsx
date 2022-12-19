/**
 * Products context, used for demo purposes for upgrading from redux to context.
 * To create a context, you create an interface which has the structure of your context object
 * You then create a component which you'll pass through, usually to app.tsx or index.tsx which wraps around your app
 * You should execute all your logic and treat it as a regular component here
 * Pass values to your value prop. This should match the layout of your interface.
 */

import React from "react";
import { useState } from "react";

interface ProductContextInterface {
  products : any[],
  toggleFavorite : any
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

        // Find the product based on the productID as the index when clicked
        const prodIndex = previousState.findIndex(
          ( product : any ) => { return ( product.id === productId ); }
        );

        // Toggle the isFavorite state
        const newFavStatus = !previousState[prodIndex].isFavorite;

        // Create a new array so we don't mutate our previous state
        const updatedProducts = [...previousState];

        // Create a new updated entry based on the index with the new favorite status
        updatedProducts[prodIndex] = {
          ...previousState[prodIndex],
          isFavorite: newFavStatus
        };

        return updatedProducts;

      });

    }

    return (
        <ProductsContext.Provider value={{products: productsList, toggleFavorite : toggleFavorite}}>
          {props.children}
        </ProductsContext.Provider>
    );
};