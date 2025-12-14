import { BsCodeSlash } from 'react-icons/bs';
import { Link } from 'react-router';

import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.root}>
      <Link to="/shop">
        <button type="button" className={styles['white-btn']}>
          View Catalog
        </button>
      </Link>
      <a
        className={styles.github}
        href="https://github.com/JCarlosLucio/shopping-cart"
      >
        <BsCodeSlash />
      </a>
      <small className={styles.version}>v0.1.0</small>
    </div>
  );
}

export default Home;
