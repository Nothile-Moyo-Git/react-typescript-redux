import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import productReducer from './store/reducers/products';

const rootReducer = combineReducers({
  shop: productReducer
});

const store = createStore(rootReducer);

// Root element, uses a non-null assertion at the end for guarding
const rootElement : HTMLElement = document.getElementById("root")!;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/react-typescript-redux">
      <App />
    </BrowserRouter>
  </Provider>
);
