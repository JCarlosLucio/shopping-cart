import React from 'react';
import Item from './Item';

function Shop({ items }) {
  return (
    <div>
      <h1>SHOP</h1>
      {items.map((item) => <Item key={item.id} {...item} />)}
    </div>
  );
}

export default Shop;
