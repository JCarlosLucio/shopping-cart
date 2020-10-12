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
        <div>
          <img
            className={styles.image}
            src={`https://source.unsplash.com/LvySG1hvuzI/1080x600`}
            alt="empty-cart"
          />
          <h1>- Your cart is empty -</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
