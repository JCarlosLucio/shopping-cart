import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartItemsQty }) {
  return (
    <nav>
      <Link to="/">
        <h1>Shopping Cart</h1>
      </Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart {cartItemsQty}</Link>
    </nav>
  );
}

export default Navbar;
