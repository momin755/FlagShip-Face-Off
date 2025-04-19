import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { MdShoppingCart } from "react-icons/md";
import { MdBookmarks } from "react-icons/md";
import { CartContext } from '../../providers/CartContext';
const Header = () => {
  const {cart} = useContext(CartContext)
    const links = <>
    <li><NavLink to={'/'} className={({isActive}) => isActive? 'text-green-500 border border-green-400' : ""}>Home</NavLink></li>
    <li><NavLink to={'/about'} className={({isActive}) => isActive? 'text-green-500 border border-green-400' : ""}>About</NavLink></li>
    <li><NavLink to={'/cart'} className={({isActive}) => isActive? 'text-green-500 border border-green-400' : ""}><MdShoppingCart size={20} /> <span>{cart.length}</span> </NavLink></li>
    <li><NavLink to={'/favorites'} className={({isActive}) => isActive? 'text-green-500 border border-green-400' : ""}><MdBookmarks size={20} /></NavLink></li>
    </>
    return (
        <div className="navbar px-0 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost text-xl">FlagshipFaceOff</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
</div>
    );
};

export default Header;