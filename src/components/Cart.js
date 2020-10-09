import React from 'react';
import CartItem from './CartItem';

function Cart({ items, deleteCartItem, incQty, decQty }) {
  return (
    <div>
      <h1>CART</h1>
      {items.length > 0 ? (
        items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            deleteCartItem={deleteCartItem}
            incQty={incQty}
            decQty={decQty}
          />
        ))
      ) : (
        <h1>- Your cart is empty -</h1>
      )}
    </div>
  );
}

export default Cart;
