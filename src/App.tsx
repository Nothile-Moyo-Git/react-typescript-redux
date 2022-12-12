import { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import Layout from './components/UI/Layout';
import { scaleRotate as Menu } from 'react-burger-menu'

const App = (props : any) => {

  // Menu handler so we can hide our hamburger icon when we open the menu since it doesn't innately hide
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const toggleMenuHandler = () => {

    setToggleMenu((previousState) => {
      return(!previousState);
    });

  };

  return (
    <Layout>

      <Menu 
        pageWrapId="page-wrap" 
        outerContainerId="outer-wrap" 
        right
        onStateChange={toggleMenuHandler}
      >
        <NavLink to="/">All Products</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </Menu>

      <div id="page-wrap"> 

        <Navigation />

        <Routes>
          <Route path="/" element={<ProductsPage/>} />
          <Route path="/favorites" element={<FavoritesPage/>} />
        </Routes>

      </div>

    </Layout>
  );
};

export default App;
