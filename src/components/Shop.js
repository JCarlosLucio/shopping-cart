import React from 'react';
import ShopItem from './ShopItem';
import styles from './Shop.module.css';

function Shop({ items }) {
  return (
    <div className={styles.root}>
      {items.map((item) => <ShopItem key={item.id} {...item} />)}
    </div>
  );
}

export default Shop;
