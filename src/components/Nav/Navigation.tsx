/**
 * Navigation component
 * Currently has the logo, title and menu on the right hand side
 * Menu uses the react-burger-menu with the "scale-rotate" option chosen
 */

import { NavLink } from 'react-router-dom';
import { GiChewedHeart } from "react-icons/gi";
import './Navigation.scss';

const Navigation = (props : any) => {

  return (
    <header className="main-header">

      <NavLink to="/" className="main-header__logo">
        <GiChewedHeart/>
        React Favouites
      </NavLink>

      <div className="main-header__background"/>
    </header>
  );
  
};

export default Navigation;
