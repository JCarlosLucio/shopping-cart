import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShopItem.module.css';

function Item({ id, imageId, itemName, price }) {
  return (
    <div className={styles.root}>
      <Link to={`/shop/${id}`}>
        <img src={`https://source.unsplash.com/${imageId}/350x450`} alt={id} />
      </Link>
      <Link to={`/shop/${id}`}>{itemName}</Link>
      <p>{price.toFixed(2)} USD</p>
    </div>
  );
}

export default Item;
