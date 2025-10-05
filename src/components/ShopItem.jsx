import { Link } from 'react-router';

import styles from './ShopItem.module.css';

function Item({ id, imageId, itemName, price }) {
  return (
    <div className={styles.root}>
      <Link to={`/shop/${id}`}>
        <img
          className={styles['responsive-image']}
          src={`https://res.cloudinary.com/dzfhooefh/image/upload/v1759612561/shopping-cart/${imageId}.webp`}
          alt={itemName}
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
