import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import Layout from './components/UI/Layout';

const App = (props : any) => {

  return (
    <Layout>
      <Navigation />
 
        <Routes>
          <Route path="/" element={<ProductsPage/>} />
          <Route path="/favorites" element={<FavoritesPage/>} />
        </Routes>
    </Layout>
  );
};

export default App;
