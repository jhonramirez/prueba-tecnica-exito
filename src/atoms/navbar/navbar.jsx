import React from "react";
import logo from "../../assets/image/logo.png";
import { navList } from "../../assets/data/data";
import { Link } from "react-router-dom";
import { Button } from "../index";
import { useSelector } from "react-redux";

export const Navbar = ({ signOut }) => {
  const quantity = useSelector(
    (quantity) => quantity.productReducer.totalQuantity
  );

  return (
    <nav>
      <figure className="left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </figure>
      <div className="center">
        <ul className="menu">
          {navList.map((nav, i) => (
            <li key={i} className="iconShoppingCart">
              <Link to={nav.path}>{nav.icon}</Link>
              {nav.path === "/shoppingcart" ? <span>{quantity}</span> : ""}
            </li>
          ))}
        </ul>
      </div>
      <Button iconName="FiLogOut" onClick={signOut} />
    </nav>
  );
};
