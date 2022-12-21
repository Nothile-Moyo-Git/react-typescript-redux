/**
 * Creating our custom product store for the useStore hook
 */
import { initStore } from "./store";

// Configure our store with actions
const configureStore = () => {

    // Set default products
    const products = [
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
    ];

    // Set default actions
    const actions = {

        TOGGLE_FAV: (currentState : any, productId : number) => {

            // Find the product based on the productID as the index when clicked
            const prodIndex = currentState.products.findIndex(
                ( product : any ) => { return ( product.id === productId ); }
            );
  
            // Toggle the isFavorite state
            const newFavStatus = !currentState.products[prodIndex].isFavorite;
  
            // Create a new array so we don't mutate our previous state
            const updatedProducts = [...currentState.products];
  
            // Create a new updated entry based on the index with the new favorite status
            updatedProducts[prodIndex] = {
                ...currentState.products[prodIndex],
                isFavorite: newFavStatus
            };

            return { products: updatedProducts };
        }

    };

    initStore(actions, {products : products});

};

export default configureStore;