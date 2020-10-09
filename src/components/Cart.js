import React from 'react';
import CartItem from './CartItem';

function Cart({ items }) {
  return (
    <div>
      <h1>CART</h1>
      {items.map((item) => <CartItem />)}
    </div>
  );
}

export default Cart;
