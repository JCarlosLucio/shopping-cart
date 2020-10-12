import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
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
        className={styles.image}
        src={`https://source.unsplash.com/${item.imageId}/600x700`}
        alt={item.id}
      />
      <div className={styles['info-container']}>
        <div className={styles.info}>
          <h1>{item.itemName}</h1>
          <p>{item.price.toFixed(2)} USD</p>

          <button className={styles['black-btn']} onClick={handleAdd}>
            Add to Cart
          </button>

          {showCompleteOrder && (
            <Link to="/cart">
              <button className={styles['black-btn']}>Complete Order</button>
            </Link>
          )}

          <button className={styles['go-back-btn']} onClick={goBack}>
            <BsChevronLeft /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
