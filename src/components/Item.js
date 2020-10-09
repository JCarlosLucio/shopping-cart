import React from 'react';
import { useHistory } from 'react-router-dom';

function Item({ id, imageId, itemName, price }) {
  const { goBack } = useHistory();

  return (
    <div>
      <h1>{itemName}</h1>
      <img src={`https://source.unsplash.com/${imageId}/250x350`} alt={id} />
      <p>${price}</p>
      <button onClick={goBack}>Go Back</button>
      <button>Add to Cart</button>
    </div>
  );
}

export default Item;
