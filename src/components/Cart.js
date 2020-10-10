import React from 'react';
import CartItem from './CartItem';

function Cart({ items, deleteCartItem, changeQty }) {
  return (
    <div>
      <h1>CART</h1>
      {items.length > 0 ? (
        items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            deleteCartItem={deleteCartItem}
            changeQty={changeQty}
          />
        ))
      ) : (
        <h1>- Your cart is empty -</h1>
      )}
    </div>
  );
}

export default Cart;
