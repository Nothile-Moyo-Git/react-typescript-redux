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

      <nav>
        <ul>
          <li>
            <NavLink to="/">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>

    </header>
  );
  
};

export default Navigation;
