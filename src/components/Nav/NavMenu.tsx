/**
 * NavMenu component
 * Currently outputs a scaleRotate menu from the react-burger-menu component
 */

import "./NavMenu.scss";
import { scaleRotate as Menu } from 'react-burger-menu';
import { NavLink } from "react-router-dom";
import { BsFillHandbagFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { GrClose } from "react-icons/gr";

const NavMenu = (props : any) => {


    return(      
        <Menu 
            pageWrapId="page-wrap" 
            outerContainerId="outer-wrap" 
            onClose={() => { props.toggleMenuHandler() }}
            isOpen={props.toggleMenu}
            className={`${props.toggleMenu && "slide-in"}`}
        >
            <button className="bm-item--close-button" onClick={props.toggleMenuHandler}>
                <GrClose/>
            </button>

            <NavLink to="/" >
                <BsFillHandbagFill/>
                <p>All Products</p>
            </NavLink>

            <NavLink to="/favorites">
                <MdFavorite/>
                <p>Favorites</p>
            </NavLink>

        </Menu>
    );
};

export default NavMenu;