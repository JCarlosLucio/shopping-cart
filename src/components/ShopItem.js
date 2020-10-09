import React from 'react';

function Item({ id, imageId, itemName, price, quantity }) {
  return (
    <div>
      <h1>{itemName}</h1>
      <img src={`https://source.unsplash.com/${imageId}/250x350`} alt={id} />
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
}

export default Item;
