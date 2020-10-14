import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import CartItem from './CartItem';
import styles from './Cart.module.css';

function Cart({ items, deleteCartItem, changeQty }) {
  const { goBack } = useHistory();
  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      deleteCartItem={deleteCartItem}
      changeQty={changeQty}
    />
  ));
  const cartTotal = items
    .map((item) => item.price * item.qty)
    .reduce((a, c) => a + c, 0)
    .toFixed(2);

  return (
    <div className={styles.root}>
      <h1>MY SHOPPING CART</h1>
      {items.length > 0 ? (
        <div className={styles['cart-container']}>
          <div className={styles['cart-items']}>{cartItems}</div>
          <div className={styles['cart-total']}>
            <button className={styles['go-back-btn']} onClick={goBack}>
              <BsChevronLeft /> Go Back
            </button>
            <h2 className={styles['total-text']}>
              <span className={styles['total-span']}>Total</span> {cartTotal}{' '}
              USD
            </h2>
            <Link to="/coming-soon">
              <button className={styles['black-btn']}>Continue</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles['empty-cart-container']}>
          <h2 className={styles['empty-cart-text']}>- Your cart is empty -</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
