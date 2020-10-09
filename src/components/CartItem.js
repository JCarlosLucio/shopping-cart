import React from 'react';
import { Link } from 'react-router-dom';

function CartItem({ id, itemName, imageId, price, qty, deleteCartItem }) {
  const handleDelete = () => deleteCartItem(id);
  return (
    <div>
      <Link to={`/shop/${id}`}>{itemName}</Link>
      <img src={`https://source.unsplash.com/${imageId}/250x350`} alt={id} />
      <p>${price}</p>
      <p>Quantity: {qty}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CartItem;
