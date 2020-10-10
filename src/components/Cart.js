import React from 'react';
import CartItem from './CartItem';

function Cart({ items, deleteCartItem, changeQty }) {
  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      deleteCartItem={deleteCartItem}
      changeQty={changeQty}
    />
  ));

  return (
    <div>
      <h1>CART</h1>
      {items.length > 0 ? (
        <div>
          <div>{cartItems}</div>
        </div>
      ) : (
        <h1>- Your cart is empty -</h1>
      )}
    </div>
  );
}

export default Cart;
