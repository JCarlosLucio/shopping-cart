import { Link } from 'react-router';

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
      <img
        className={styles['responsive-image']}
        src={`https://res.cloudinary.com/dzfhooefh/image/upload/v1759612561/shopping-cart/${imageId}.webp`}
        alt={id}
      />
      <div className={styles.info}>
        <Link to={`/shop/${id}`}>{itemName}</Link>
        <p>{price.toFixed(2)} USD</p>

        <div className={styles['qty-btns']}>
          <button type="button" onClick={handleDecrease} disabled={qty < 2}>
            -
          </button>
          <span>{qty}</span>
          <button type="button" onClick={handleIncrease}>
            +
          </button>
        </div>

        <button
          type="button"
          className={styles['delete-btn']}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
