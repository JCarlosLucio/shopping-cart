import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import styles from './Navbar.module.css';

function Navbar({ cartItemsQty }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <nav
      className={`${styles.root} ${styles[
        isHome ? 'white-text' : 'black-text'
      ]}`}
    >
      <Link to="/">
        <h1 className={styles.logo}>Shopping Cart</h1>
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
