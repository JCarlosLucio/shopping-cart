import React from 'react';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import styles from './Navbar.module.css';

function Navbar({ cartItemsQty }) {
  return (
    <nav className={styles.root}>
      <Link to="/">
        <h1>Shopping Cart</h1>
      </Link>
      <div className={styles.links}>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <BsBag />
          {cartItemsQty}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
