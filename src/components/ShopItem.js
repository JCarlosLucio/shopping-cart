import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShopItem.module.css';

function Item({ id, imageId, itemName, price }) {
  return (
    <div className={styles.root}>
      <Link to={`/shop/${id}`}>
        <img
          className={styles['responsive-image']}
          src={`https://source.unsplash.com/${imageId}/400x500`}
          alt={id}
        />
      </Link>
      <div className={styles.info}>
        <Link to={`/shop/${id}`}>{itemName}</Link>
        <p>{price.toFixed(2)} USD</p>
      </div>
    </div>
  );
}

export default Item;
