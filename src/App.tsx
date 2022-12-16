import './App.scss';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/Nav/NavMenu';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import Layout from './components/UI/Layout';
import BurgerMenuIcon from './assets/BurgerMenu';
import Header from './components/Nav/Header';

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
