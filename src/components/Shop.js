import React from 'react';
import ShopItem from './ShopItem';

function Shop({ items }) {
  return (
    <div>
      <h1>SHOP</h1>
      {items.map((item) => <ShopItem key={item.id} {...item} />)}
    </div>
  );
}

export default Shop;
