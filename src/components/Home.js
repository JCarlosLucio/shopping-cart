import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.root}>
      <Link to="/shop">
        <button>View Catalog</button>
      </Link>
    </div>
  );
}

export default Home;
