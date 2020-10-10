import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar({ cartItemsQty }) {
  return (
    <nav className={styles.root}>
      <Link to="/">
        <h1>Shopping Cart</h1>
      </Link>
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart {cartItemsQty}</Link>
      </div>
    </nav>
  );
}

export default Navbar;
