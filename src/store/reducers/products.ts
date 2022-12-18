import { TOGGLE_FAV } from '../actions/products';

const initialState = {
  products: [
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
  ]
};

const productReducer = (state = initialState, action : any) => {

  switch (action.type) {

    case TOGGLE_FAV:

      // Find the product based on the productID as the index when clicked
      const prodIndex = state.products.findIndex(
        p => p.id === action.productId
      );

      // Toggle the isFavorite state
      const newFavStatus = !state.products[prodIndex].isFavorite;

      const updatedProducts = [...state.products];

      // Create a new updated entry based on the index with the new favorite status
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus
      };
      
      return {
        ...state,
        products: updatedProducts
      };

    default:
      return state;
  }

};

export default productReducer;
