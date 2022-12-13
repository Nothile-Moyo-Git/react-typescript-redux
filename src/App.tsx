import { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import Layout from './components/UI/Layout';
import { scaleRotate as Menu } from 'react-burger-menu'
import BurgerMenu from './assets/BurgerMenu';
import { BsFillHandbagFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

const App = (props : any) => {

  // Menu handler so we can hide our hamburger icon when we open the menu since it doesn't innately hide
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const toggleMenuHandler = () => {

    setToggleMenu((previousState) => {
      return(!previousState);
    });

  };

  console.log(toggleMenu);

  return (
    <Layout>

      {
        !toggleMenu &&
        <BurgerMenu toggleMenuHandler={toggleMenuHandler}/>
      }

      <Menu 
        pageWrapId="page-wrap" 
        outerContainerId="outer-wrap" 
        right
        onClose={toggleMenuHandler}
        isOpen={toggleMenu}
        className={`${toggleMenu && "fade-in"}`}
      >

        <NavLink to="/">
          <BsFillHandbagFill/>
          <p>All Products</p>
        </NavLink>

        <NavLink to="/favorites">
          <MdFavorite/>
          <p>Favorites</p>
        </NavLink>
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
