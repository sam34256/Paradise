import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cartIcon from "../assets/img/shoping-cart.svg"; // Cart icon

const Header = () => {
  const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );


  return (
    <header className="navbar is-primary">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <strong>Green Haven</strong>
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/products" className="navbar-item">Shop</Link>
        </div>

        <div className="navbar-end">
          {/* Search bar appears only on /products page */}
          {/* {showSearch && location.pathname === "/products" && (
            <div className="navbar-item">
              <div className="control has-icons-left">
                <input
                  type="text"
                  className="input is-rounded"
                  placeholder="Search for plants..."
                  onChange={(e) => onSearch(e.target.value)}
                />
                <span className="icon is-left">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div> */}
          {/* )} */}

          {/* Cart icon with item count */}
          <Link to="/cart" className="navbar-item">
            <div className="cart-container">
              <img src={cartIcon} alt="Cart" className="cart-icon" />
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
