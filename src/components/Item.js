import React from 'react';
import { useHistory } from 'react-router-dom';

function Item({ item }) {
  const { goBack } = useHistory();

  return (
    <div>
      <h1>{item.itemName}</h1>
      <img
        src={`https://source.unsplash.com/${item.imageId}/250x350`}
        alt={item.id}
      />
      <p>${item.price}</p>
      <button onClick={goBack}>Go Back</button>
      <button>Add to Cart</button>
    </div>
  );
}

export default Item;
