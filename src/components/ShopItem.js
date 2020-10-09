import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, imageId, itemName, price }) {
  return (
    <div>
      <Link to={`/shop/${id}`}>{itemName}</Link>
      <Link to={`/shop/${id}`}>
        <img src={`https://source.unsplash.com/${imageId}/250x350`} alt={id} />
      </Link>
      <p>${price}</p>
    </div>
  );
}

export default Item;
