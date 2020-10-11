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
      <Link to="/shop">Shop</Link>
      <Link to="/cart">
        <div className={styles.icon}>
          <BsBag />
          <span className={styles['icon-num']}>{cartItemsQty}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
