import React from 'react';
import { Link } from 'react-router-dom';

function CartItem({ id, itemName, imageId, price, quantity }) {
  return (
    <div>
      <Link to={`/shop/${id}`}>{itemName}</Link>
      <img src={`https://source.unsplash.com/${imageId}/250x350`} alt={id} />
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
      <button>Delete</button>
    </div>
  );
}

export default CartItem;
