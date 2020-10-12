import React from 'react';
import CartItem from './CartItem';
import styles from './Cart.module.css';

function Cart({ items, deleteCartItem, changeQty }) {
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
        <div>
          <div>{cartItems}</div>
          <h2>Total: ${cartTotal}</h2>
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
