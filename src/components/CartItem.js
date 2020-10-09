import React from 'react';
import { Link } from 'react-router-dom';

function CartItem({ id, itemName, imageId, price, quantity, deleteCartItem }) {
  const handleDelete = () => deleteCartItem(id);
  return (
    <div>
      <Link to={`/shop/${id}`}>{itemName}</Link>
      <img src={`https://source.unsplash.com/${imageId}/250x350`} alt={id} />
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CartItem;
