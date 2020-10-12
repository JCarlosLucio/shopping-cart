import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Item.module.css';

function Item({ item, addCartItem }) {
  const [showCompleteOrder, setShowCompleteOrder] = useState(false);
  const { goBack } = useHistory();

  const handleAdd = () => {
    setShowCompleteOrder(true);
    addCartItem(item);
  };

  return (
    <div className={styles.root}>
      <img
        src={`https://source.unsplash.com/${item.imageId}/250x350`}
        alt={item.id}
      />
      <h1>{item.itemName}</h1>
      <p>${item.price}</p>
      <button onClick={goBack}>Go Back</button>
      <button onClick={handleAdd}>Add to Cart</button>
      {showCompleteOrder && (
        <Link to="/cart">
          <button>Complete Order</button>
        </Link>
      )}
    </div>
  );
}

export default Item;
