import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import configureStore from './hooks-store/product-store';

// Root element, uses a non-null assertion at the end for guarding
const rootElement : HTMLElement = document.getElementById("root")!;

configureStore();

const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter basename="/react-typescript-redux">
    <App />
  </BrowserRouter>
);
