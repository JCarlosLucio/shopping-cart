import { useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router';

import styles from './Item.module.css';

function Item({ findItem, addCartItem }) {
  const { id } = useParams();
  const item = findItem(id);
  const [showCompleteOrder, setShowCompleteOrder] = useState(false);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleAdd = () => {
    setShowCompleteOrder(true);
    addCartItem(item);
  };

  return (
    <div className={styles.root}>
      <img
        className={styles.image}
        src={`https://res.cloudinary.com/dzfhooefh/image/upload/v1759612561/shopping-cart/${item.imageId}.webp`}
        alt={item.itemName}
      />
      <div className={styles['info-container']}>
        <div className={styles.info}>
          <h1>{item.itemName}</h1>
          <p>{item.price.toFixed(2)} USD</p>

          <button
            type="button"
            className={styles['black-btn']}
            onClick={handleAdd}
          >
            Add to Cart
          </button>

          {showCompleteOrder && (
            <Link to="/cart">
              <button type="button" className={styles['black-btn']}>
                Complete Order
              </button>
            </Link>
          )}

          <button
            type="button"
            className={styles['go-back-btn']}
            onClick={goBack}
          >
            <BsChevronLeft /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
