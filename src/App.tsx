import './App.scss';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
const Layout = React.lazy(() => { return import('./components/UI/Layout'); });
const BurgerMenuIcon = React.lazy(() => { return import('./assets/BurgerMenu'); });
const Header = React.lazy(() => { return import('./components/Nav/Header'); }) ;
const NavMenu = React.lazy(() => { return import('./components/Nav/NavMenu'); });

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

      { !toggleMenu &&  <BurgerMenuIcon toggleMenuHandler={toggleMenuHandler}/> }

      <NavMenu toggleMenu={toggleMenu} toggleMenuHandler={toggleMenuHandler}/>

      <div id="page-wrap" className={`${toggleMenu && 'rotate'}`}> 

        <Header />

        <Routes>
          <Route path="/" element={<ProductsPage/>} />
          <Route path="/favorites" element={<FavoritesPage/>} />
        </Routes>

      </div>

    </Layout>
  );
};

export default App;
