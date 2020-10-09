import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, imageId, itemName, price, quantity }) {
  return (
    <div>
      <Link to={`/shop/${id}`}>{itemName}</Link>
      <img src={`https://source.unsplash.com/${imageId}/250x350`} alt={id} />
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
}

export default Item;
