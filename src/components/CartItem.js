import React from 'react';
import { Link } from 'react-router-dom';

function CartItem({
  id,
  itemName,
  imageId,
  price,
  qty,
  deleteCartItem,
  incQty,
  decQty,
}) {
  const handleDelete = () => deleteCartItem(id);
  const handleIncrease = () => incQty(id);
  const handleDecrease = () => decQty(id);

  return (
    <div>
      <Link to={`/shop/${id}`}>{itemName}</Link>
      <img src={`https://source.unsplash.com/${imageId}/250x350`} alt={id} />
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
