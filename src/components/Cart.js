import React from 'react';
import CartItem from './CartItem';

function Cart({ items, deleteCartItem }) {
  return (
    <div>
      <h1>CART</h1>
      {items.length > 0 ? (
        items.map((item) => (
          <CartItem {...item} deleteCartItem={deleteCartItem} />
        ))
      ) : (
        <h1>- Your cart is empty -</h1>
      )}
    </div>
  );
}

export default Cart;
