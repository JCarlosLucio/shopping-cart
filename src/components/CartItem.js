import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartItem.module.css';

function CartItem({
  id,
  itemName,
  imageId,
  price,
  qty,
  deleteCartItem,
  changeQty,
}) {
  const handleDelete = () => deleteCartItem(id);
  const handleIncrease = () => changeQty(id, 1);
  const handleDecrease = () => changeQty(id, -1);

  return (
    <div className={styles.root}>
      <img src={`https://source.unsplash.com/${imageId}/250x350`} alt={id} />
      <Link to={`/shop/${id}`}>{itemName}</Link>
      <p>${price}</p>
      <p>
        <button onClick={handleDecrease} disabled={qty < 2}>
          -
        </button>{' '}
        Quantity: {qty} <button onClick={handleIncrease}>+</button>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CartItem;
